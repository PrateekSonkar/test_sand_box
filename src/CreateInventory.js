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
    inventory["bintype"] = this.state.option;
    this.generateInventoryWithUniqueNumber(inventory);
  }

  generateInventoryWithUniqueNumber(inventory) {
    //generate unique nummber to individual bin
    for (let a = 0; a < inventory.lotquantity; a++) {
      //to be continued
    }
  }
  render() {
    return (
      <div>
        <b>Create Inventory</b>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Lot Name" name="lotname" />
          <input placeholder="Lot Quantity" name="lotquantity" />
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
          <button className="waves-effect waves-light btn">
            Generate Inventory
          </button>
        </form>
      </div>
    );
  }
}
