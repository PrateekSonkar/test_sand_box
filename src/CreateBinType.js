import React from "react";
import _lodash from "lodash";

export default class CreateBinType extends React.Component {
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
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Create Bin</span>
                <div>
                  <form onSubmit={this.handleClick}>
                    <div className="input-field">
                      <input type="text" id="binname" name="binname" />
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
                      <label htmlFor="binmanufacturer">Bin Capacity</label>
                    </div>
                    <div className="card-action">
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
