import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/createbintype">Create Bin</Link>
              </li>
              <li>
                <Link to="/createbininventory">Create Bin Inventory</Link>
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
