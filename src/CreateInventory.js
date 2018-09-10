import React from "react";
import jquery from "jquery";
import ReactDOM from "react-dom";

export default class CreateInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("component did mount");
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instances = M.FormSelect.init(elems);
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Item Name" />
          <input placeholder="Item Capacity" />
          <input placeholder="Item Quantity" />
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </form>
      </div>
    );
  }
}
