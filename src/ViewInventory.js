//shall be updated once db is integrated.
import React from "react";
import _lodash from "lodash";
import { Link } from "react-router-dom";
import { removeFromList, collBinInventories } from "../firebase/collections";

export default class ViewInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: []
    };
    this.deleteInventory = this.deleteInventory.bind(this);
  }

  componentWillMount() {
    collBinInventories
      .once("value")
      .then(snapshot => {
        console.log("Values Bin Inventories : ", snapshot.val());
        const inventories = [];
        snapshot.forEach(childSnapshot => {
          inventories.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState(
          prevState => {
            console.log("Set State : ", inventories);
            return {
              inventories: inventories
            };
          },
          () => {
            console.log("Setting up state", this.state.inventories.length);
          }
        );
      })
      .catch(e => {
        console.log("Error : ", e);
      });
  }

  deleteInventory(e) {
    console.log("deleteInventory ", e);
    let id = e;
    let idx = _lodash.findIndex(this.state.inventories, {
      id
    });
    if (idx > -1) {
      this.setState(prevState => {
        prevState.inventories.splice(idx, 1);
        return {
          inventories: prevState.inventories
        };
      });
      removeFromList("bininventories/" + id);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m2" />
          <div className="col s12 m8">
            <div className="center-align">
              <b>Inventory Details</b>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Lot Name</th>
                  <th>Bin Type</th>
                  <th>Lot Number</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.inventories.map((inventory, index) => (
                  <tr rel={inventory.id} key={inventory.id}>
                    <td>{inventory.lotname}</td>
                    <td>{inventory.bintype}</td>
                    <td>{inventory.lotnumber}</td>
                    <td>{inventory.lotquantity}</td>
                    <td
                      onClick={e => {
                        e.preventDefault;
                        this.deleteInventory(inventory.id);
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
            to="/createbininventory"
            className="btn-floating btn-large waves-effect waves-light deep-orange"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
