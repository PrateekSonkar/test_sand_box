import React from "react";
import { connect } from "react-redux";
import ViewBinTypesList from "./ViewBinTypesList";

const ViewBinTypesRedux = props => (
  <table>
    <thead>
      <tr>
        <th>Bin Name</th>
        <th>Bin Code</th>
        <th>Bin Capacity</th>
        <th>Bin Manufacturer</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.bintypes.map((bintype, index) => {
        return (
          <ViewBinTypesList
            key={bintype.id}
            bintype={bintype}
            deleteBinType={props.deleteBinType}
          />
        );
      })}
    </tbody>
  </table>
);

const mapStateToProps = state => {
  return {
    bintypes: state.bintypes
  };
};

export default connect(mapStateToProps)(ViewBinTypesList);
