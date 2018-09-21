import React from "react";

const ViewBinTypesList = props => (
  <tr>
    <td>{props.bintype.name}</td>
    <td>{props.bintype.code}</td>
    <td>{props.bintype.capacity}</td>
    <td>{props.bintype.manufacturer}</td>
    <td
      onClick={e => {
        e.preventDefault;
        props.deleteBinType(props.bintype.id);
      }}
    >
      <a className="btn-floating waves-effect red">
        <i className="material-icons">delete_forever</i>
      </a>
    </td>
  </tr>
);

export default ViewBinTypesList;
