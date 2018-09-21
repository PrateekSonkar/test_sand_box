import React from "react";

import { collBinTypes } from "../firebase/collections";
import { addBinType } from "../src/actions/binTypesActions";

export default class CreateBinType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: [],
      info: "",
      error: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetInfoAndError = this.resetInfoAndError.bind(this);
    this.resetInputFields = this.resetInputFields.bind(this);
  }

  resetInfoAndError(info = "", error = "") {
    this.setState(prevState => {
      return {
        info,
        error
      };
    });
  }

  resetInputFields() {
    document.getElementsByName("binname").value = "";
    document.getElementsByName("bincode").value = "";
    document.getElementsByName("bincap").value = "";
    document.getElementsByName("binmanufacturer").value = "";
  }

  handleClick(e) {
    e.preventDefault();
    this.resetInfoAndError();
    let newBin = {};
    console.log(
      Boolean(e.target.elements.binname.value),
      Boolean(!e.target.elements.binname.value)
    );
    if (
      !!e.target.elements.binname.value &&
      !!e.target.elements.bincode.value &&
      !!e.target.elements.bincap.value &&
      !!e.target.elements.binmanufacturer.value
    ) {
      newBin["name"] = e.target.elements.binname.value;
      newBin["code"] = e.target.elements.bincode.value;
      newBin["capacity"] = e.target.elements.bincap.value;
      newBin["manufacturer"] = e.target.elements.binmanufacturer.value;
      console.log(newBin);
      this.props.onSubmit(newBin);
      collBinTypes
        .push(newBin)
        .then(() => {
          this.resetInfoAndError("Data Saved Successfully");
          this.resetInputFields();
        })
        .catch(e => {
          this.resetInfoAndError("", e);
        });
    } else {
      this.resetInfoAndError("", "Missing One or More Mandatory Fields");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Create Bin</span>
                {this.state.error && (
                  <p className="green-text text-darken-2">{this.state.error}</p>
                )}
                {this.state.info && (
                  <p className="red-text text-darken-2">{this.state.info}</p>
                )}
                <div>
                  <form onSubmit={this.handleClick}>
                    <div className="input-field">
                      <input
                        type="text"
                        id="binname"
                        name="binname"
                        autoFocus
                      />
                      <label htmlFor="binname">Bin Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" name="bincode" id="bincode" />
                      <label htmlFor="bincode">Bin Code</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="bincap" name="bincap" />
                      <label htmlFor="bincap">Bin Capacity</label>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="binmanufacturer"
                        name="binmanufacturer"
                      />
                      <label htmlFor="binmanufacturer">Bin Manufacturer</label>
                    </div>
                    <div>
                      <button className="waves-effect waves-light btn deep-orange">
                        Create Bin Type
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3" />
        </div>
      </div>
    );
  }
}
