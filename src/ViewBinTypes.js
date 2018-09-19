import React from "react";
import _lodash from "lodash";
import { Link } from "react-router-dom";
import { collBinTypes, removeFromList } from "../firebase/collections";

export default class ViewBinTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: []
    };
    this.deleteBinType = this.deleteBinType.bind(this);
  }

  componentWillMount() {
    collBinTypes
      .once("value")
      .then(snapshot => {
        console.log("Values : ", snapshot.val());
        const bintypes = [];
        snapshot.forEach(childSnapshot => {
          bintypes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState(prevState => {
          return {
            bintypes
          };
        });
      })
      .catch(e => {
        console.log("Error : ", e);
      });
  }

  deleteBinType(e) {
    console.log("deleteBinType ", e);
    let id = e;
    let idx = _lodash.findIndex(this.state.bintypes, {
      id
    });
    if (idx > -1) {
      this.setState(prevState => {
        prevState.bintypes.splice(idx, 1);
        return {
          bintypes: prevState.bintypes
        };
      });
      removeFromList("bintypes/" + id);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m2" />
          <div className="col s12 m8">
            <table>
              <thead>
                <tr>
                  <th>Bin Name</th>
                  <th>Bin Code</th>
                  <th>Bin Capacity</th>
                  <th>Bin Manufacturer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bintypes.map((bintype, index) => (
                  <tr rel={bintype.id} key={bintype.id}>
                    <td>{bintype.name}</td>
                    <td>{bintype.code}</td>
                    <td>{bintype.capacity} Kg.</td>
                    <td>{bintype.manufacturer}</td>
                    <td
                      onClick={e => {
                        e.preventDefault;
                        this.deleteBinType(bintype.id);
                      }}
                    >
                      <a className="btn-floating waves-effect red">
                        <i className="material-icons">delete_forever</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col s12 m2" />
        </div>
        <div className="right-align">
          <Link
            to="/createbintype"
            className="btn-floating btn-large waves-effect waves-light deep-orange"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
