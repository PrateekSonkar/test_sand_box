import React from "react";
import { collBinTypes, collCreateBinRequests } from "../firebase/collections";

export default class RequestInvemtory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bintypes: [],
      option: "none"
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.initSelect = this.initSelect.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.initSelect();
    collBinTypes
      .once("value")
      .then(snapshot => {
        console.log("Values : ", snapshot.val());
        const bintypes = [];
        snapshot.forEach(childSnapshot => {
          bintypes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState(
          prevState => {
            return {
              bintypes
            };
          },
          () => {
            this.initSelect();
          }
        );
      })
      .catch(e => {
        console.log("Error : ", e);
      });
  }

  initSelect() {
    let elems = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elems);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    var binRequest = {};
    binRequest["reqdesc"] = e.target.elements.reqdesc.value;
    binRequest["reqdept"] = e.target.elements.reqdept.value;
    binRequest["reqquantity"] = e.target.elements.reqquantity.value;
    binRequest["bintype"] = document.getElementById("binidtype").value;
    console.log("Request Bin ", binRequest);
    collCreateBinRequests.push(binRequest);
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
                      <select
                        onChange={this.handleOnChange}
                        defaultValue={this.state.option}
                        id="binidtype"
                      >
                        <option value="none" disabled>
                          Choose your option
                        </option>
                        {this.state.bintypes.map((bintype, index) => (
                          <option
                            key={bintype.id}
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
