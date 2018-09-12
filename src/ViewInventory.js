//shall be updated once db is integrated.
import React from "react";

export default class ViewInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  render() {
    return (
      <div className="row">
        <b>Inventory Details</b>
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
    );
  }
}
