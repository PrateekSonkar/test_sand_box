//shall be updated once db is integrated.
import React from "react";
import { Link } from "react-router-dom";

export default class ViewInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
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
                  <th>Lot Number</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col s12 m2" />
        </div>
        <div className="right-align">
          <Link to="/createbininventory">
            <a class="btn-floating btn-large waves-effect waves-light deep-orange">
              <i class="material-icons">add</i>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
