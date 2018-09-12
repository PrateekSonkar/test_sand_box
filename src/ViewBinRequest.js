import React from "react";

export default class ViewBinRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Action is approve and dispatched. Conditional button enbling
  render() {
    return (
      <div className="row">
        <b>Bin Request Queue</b>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Desc</th>
                <th>Bin Type</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R101</td>
                <td>Need 5 Bin of 5 Kg</td>
                <td>TP5</td>
                <td>10</td>
                <td>
                  <i class="material-icons">done</i>
                  <i class="material-icons">arrow_forward</i>
                </td>
              </tr>
              <tr>
                <td>R102</td>
                <td>Need 5 Bin of 3 Kg</td>
                <td>TP3</td>
                <td>10</td>
                <td>
                  <i class="material-icons">done</i>
                  <i class="material-icons">arrow_forward</i>
                </td>
              </tr>
              <tr>
                <td>R103</td>
                <td>Need 5 Bin of 7 Kg</td>
                <td>TP7</td>
                <td>10</td>
                <td>
                  <i class="material-icons">done</i>
                  <i class="material-icons">arrow_forward</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
