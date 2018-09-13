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

  componentDidMount() {
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instances = M.FormSelect.init(elems);
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
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">
                  <b>Request Bin </b>
                </span>
                <div>
                  <form onSubmit={this.handleOnSubmit}>
                    <div className="input-field">
                      <input type="text" id="reqdesc" name="reqdesc" />
                      <label htmlFor="reqdesc">Description</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="reqdept" name="reqdept" />
                      <label htmlFor="reqdept">Department Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="reqquantity" name="reqquantity" />
                      <label htmlFor="reqquantity">Quantity</label>
                    </div>
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
                    <button className="waves-effect waves-light btn deep-orange">
                      Generate Inventory
                    </button>
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
