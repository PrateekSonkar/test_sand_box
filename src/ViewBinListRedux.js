import React from "react";
import { connect } from "react-redux";

const BinListRedux = props => (
  <div>
    <h5>BinList</h5>
    <b>
      {props.bintypes.map(
        ({ id, binname, bincode, bincap, binmanufacturer }) => (
          <div className="row" key={id}>
            <div>{binname}</div>
            <div>{bincode}</div>
            <div>{bincap}</div>
            <div>{binmanufacturer}</div>
          </div>
        )
      )}
    </b>
  </div>
);

const mapStateToProps = state => {
  return {
    bintypes: state.bintypes
  };
};
export default connect(mapStateToProps)(BinListRedux);
