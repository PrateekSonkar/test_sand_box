import React from "react";
import _lodash from "lodash";
import { Link } from "react-router-dom";

export default class ViewBinTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteBinType = this.deleteBinType.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let newBin = {};
    newBin["name"] = e.target.elements.binname.value;
    newBin["code"] = e.target.elements.bincode.value;
    newBin["capacity"] = e.target.elements.bincap.value;
    newBin["manufacturer"] = e.target.elements.binmanufacturer.value;
    console.log(newBin);
    this.setState(prevState => {
      return {
        bintypes: prevState.bintypes.concat([newBin])
      };
    });
  }

  deleteBinType(e) {
    console.log("deleteBinType", e.target.parentNode);
    let idx = _lodash.findIndex(this.state.bintypes, {
      code: e.target.parentNode.getAttribute("rel")
    });
    console.log(idx);
    if (idx > -1) {
      this.setState(prevState => {
        return {
          bintypes: prevState.bintypes.splice(idx, 1)
        };
      });
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
                  <tr rel={bintype.code} key={bintype.code + index}>
                    <td>{bintype.name}</td>
                    <td>{bintype.code}</td>
                    <td>{bintype.capacity} Kg.</td>
                    <td>{bintype.manufacturer}</td>
                    <td onClick={this.deleteBinType}>Delete</td>
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
