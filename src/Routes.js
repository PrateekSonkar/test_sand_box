import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import SmallCardComponent from "./SmallCardComponent";
import CreateBinInventory from "./CreateInventory";
import CreateBinType from "./CreateBinType";
import ViewBinInventory from "./ViewInventory";
import RequestBins from "./RequestInventory";
import ViewBinRequest from "./ViewBinRequest";
import ViewBinTypes from "./ViewBinTypes";
import Header from "./Header";

const Routes = props => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={SmallCardComponent} exact={true} />
            <Route path="/createbintype" component={CreateBinType} />
            <Route path="/viewbintypes" component={ViewBinTypes} />
            <Route path="/createbininventory" component={CreateBinInventory} />
            <Route path="/viewbininventory" component={ViewBinInventory} />
            <Route path="/requestbins" component={RequestBins} />
            <Route path="/viewbinrequest" component={ViewBinRequest} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
