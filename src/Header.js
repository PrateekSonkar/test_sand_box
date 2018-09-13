import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <nav className="deep-purple darken-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo" />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/viewbintypes">View Bin</Link>
              </li>
              <li>
                <Link to="/viewbininventory">View Bin Inventory</Link>
              </li>
              <li>
                <Link to="/requestbins">Request Bin</Link>
              </li>
              <li>
                <Link to="/viewbinrequest">View Bin Request</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
