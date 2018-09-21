import React from "react";
import BinListRedux from "./ViewBinListRedux";

export default class ViewBinTypesRedux extends React.Component {
  constructor(props) {
    super(props);
    this.testFunc = this.testFunc.bind(this);
  }

  testFunc(id) {
    console.log("test function ", id);
  }

  render() {
    return (
      <div>
        <b> View List </b>
        <BinListRedux testFunc={this.testFunc} />
      </div>
    );
  }
}
