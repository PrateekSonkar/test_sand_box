import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BinListRedux = props => (
  <div>
    <h5>BinList</h5>
    <div>{props.testFunc && <p>Props Available</p>}</div>
    <b>
      {props.bintypes.map(
        ({ id, binname, bincode, bincap, binmanufacturer }) => (
          <div className="row" key={id}>
            <div>{binname}</div>
            <div>{bincode}</div>
            <div>{bincap}</div>
            <div>{binmanufacturer}</div>
            <div
              onClick={() => {
                props.testFunc(bincode);
              }}
            >
              {props.testFunc && <p>Props Available</p>}
            </div>
          </div>
        )
      )}
    </b>
    <div className="container">
      <div className="row">
        <div className="col s12 m2" />
        <div className="col s12 m8">
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
              {props.bintypes.map(
                ({ id, binname, bincode, bincap, binmanufacturer }) => (
                  <tr rel={id} key={id}>
                    <td>{binname}</td>
                    <td>{bincode}</td>
                    <td>{bincap}</td>
                    <td>{binmanufacturer}</td>
                    <td
                      onClick={e => {
                        e.preventDefault;
                        props.testFunc(id);
                      }}
                    >
                      <a className="btn-floating waves-effect red">
                        <i className="material-icons">delete_forever</i>
                      </a>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="col s12 m2" />
      </div>
      <div className="right-align">
        <Link
          to="/createbintype"
          className="btn-floating btn-large waves-effect waves-light deep-orange"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    bintypes: state.bintypes
  };
};
export default connect(mapStateToProps)(BinListRedux);
