import React from "react";

export default class BoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="card">{this.props.boxtext}</div>;
  }
}
