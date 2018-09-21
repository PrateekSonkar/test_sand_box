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
import BinListRedux from "./ViewBinListRedux";
import CreateBinForm from "./CreateBinForm";
import CreateInventoryForm from "./CreateInventoryForm";

const Routes = props => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={CreateBinType} exact={true} />
            <Route path="/createbintype" component={CreateBinForm} />
            <Route path="/viewbintypes" component={ViewBinTypes} />
            <Route path="/createbininventory" component={CreateInventoryForm} />
            <Route path="/viewbininventory" component={ViewBinInventory} />
            <Route path="/requestbins" component={RequestBins} />
            <Route path="/viewbinrequest" component={ViewBinRequest} />
            <Route path="/reduxbinlist" component={BinListRedux} />
            <Route path="/createbinform" component={CreateBinForm} />
            <Route path="/createinvform" component={CreateInventoryForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
