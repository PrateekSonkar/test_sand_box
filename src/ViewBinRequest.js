import React from "react";
import { collCreateBinRequests } from "../firebase/collections";

export default class ViewBinRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binrequests: []
    };
  }

  componentWillMount() {
    collCreateBinRequests
      .once("value")
      .then(snapshot => {
        console.log("Values : ", snapshot.val());
        const binrequests = [];
        snapshot.forEach(childSnapshot => {
          binrequests.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState(prevState => {
          return {
            binrequests
          };
        });
      })
      .catch(e => {
        console.log("Error : ", e);
      });
  }

  // Action is approve and dispatched. Conditional button enbling
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m2" />
          <div className="col s12 m8">
            <div className="center-align">
              <b>Bin Request Queue</b>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Row Number</th>
                    <th>Desc</th>
                    <th>Bin Type</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.binrequests.map((binrequest, index) => (
                    <tr key={binrequest.id}>
                      <td>{index + 1}</td>
                      <td>{binrequest.reqdesc}</td>
                      <td>{binrequest.bintype}</td>
                      <td>{binrequest.reqquantity}</td>
                      <td>
                        <a className="btn-floating waves-effect green">
                          <i className="material-icons">done</i>
                        </a>
                        <a className="btn-floating waves-effect blue">
                          <i className="material-icons">arrow_forward</i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col s12 m2" />
        </div>
      </div>
    );
  }
}
