import React from "react";

export default class BoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="customcardcss">{this.state.boxtext}</div>;
  }
}
