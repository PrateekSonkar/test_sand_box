import React from "react";

export default class RequestInvemtory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: [
        { name: "Temp", code: "T3", capacity: "3", manufacturer: "An" },
        { name: "Temp 1", code: "T34", capacity: "4", manufacturer: "An" },
        { name: "Temp 2", code: "T35", capacity: "5", manufacturer: "An" },
        { name: "Temp 3", code: "T36", capacity: "6", manufacturer: "An" }
      ],
      option: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    var binRequest = {};
    binRequest["reqdesc"] = e.target.elements.reqdesc.value;
    binRequest["reqdept"] = e.target.elements.reqdept.value;
    binRequest["reqquantity"] = e.target.elements.reqquantity.value;
    binRequest["reqdesc"] = this.state.option;
    console.log("Request Bin ", binRequest);
  };

  handleOnChange(e) {
    let option = e.target.value;
    console.log(option);
    this.setState(prevState => {
      return {
        option: option
      };
    });
  }

  render() {
    return (
      <div className="row">
        <b>Request Bin </b>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" placeholder="Description" name="reqdesc" />
          <input type="text" placeholder="Department Name" name="reqdept" />
          <div className="input-field col s12">
            <select onChange={this.handleOnChange}>
              <option value="" disabled>
                Choose your option
              </option>
              {this.state.bintypes.map((bintype, index) => (
                <option value={bintype.code}>{bintype.name} </option>
              ))}
            </select>
            <label>Bin Type</label>
          </div>
          <input type="text" placeholder="Quantity" name="reqquantity" />
        </form>
      </div>
    );
  }
}
