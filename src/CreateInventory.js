import React from "react";

export default class CreateInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: [
        { name: "Temp", code: "T3", capacity: "3", manufacturer: "An" },
        { name: "Temp 1", code: "T34", capacity: "4", manufacturer: "An" },
        { name: "Temp 2", code: "T35", capacity: "5", manufacturer: "An" },
        { name: "Temp 3", code: "T36", capacity: "6", manufacturer: "An" }
      ]
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instances = M.FormSelect.init(elems);
  }

  handleOnChange(e) {
    let option = e.target.value;
    console.log(option);
    this.setState(prevState => {
      return {
        option: option
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let inventory = {};
    inventory["lotname"] = e.target.elements.lotname.value;
    inventory["lotquantity"] = e.target.elements.lotquantity.value;
    inventory["lotnumber"] = e.target.elements.lotnumber.value;
    inventory["bintype"] = this.state.option;
    this.generateInventoryWithUniqueNumber(inventory);
  }

  generateInventoryWithUniqueNumber(inventory) {
    //generate unique nummber to individual bin
    // <div className="input-field">
    //   <input type="text" id="binname" name="binname" />
    //   <label htmlFor="binname">Bin Name</label>
    // </div>
  }
  render() {
    return (
      <div className="container">
        <div className="row center-align">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">
                  <b>Create Inventory</b>
                </span>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                      <input type="text" name="lotname" id="lotname" />
                      <label htmlFor="lotname">Lot Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" name="lotquantity" id="lotquantity" />
                      <label htmlFor="lotquantity">Lot Quantity</label>
                    </div>
                    <div className="input-field">
                      <input type="text" name="lotnumber" id="lotnumber" />
                      <label htmlFor="lotnumber">Lot Number</label>
                    </div>
                    <div className="input-field col s12">
                      <select onChange={this.handleOnChange}>
                        <option value="" disabled>
                          Choose your option
                        </option>
                        {this.state.bintypes.map((bintype, index) => (
                          <option
                            key={index}
                            value={bintype.code}
                            className="deep-orange-text"
                          >
                            {bintype.name}
                          </option>
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
