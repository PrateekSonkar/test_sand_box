import React from "react";
import { connect } from "react-redux";
import CreateInventory from "./CreateInventory";
import { addNewInventory } from "./actions/createInventoryAction";

const CreateInventoryForm = props => {
  return (
    <div>
      <b>Create Inventory Form</b>
      <CreateInventory
        onSubmit={newInventoryInfo => {
          console.log("newInventoryInfo : ", newInventoryInfo);
          props.dispatch(addNewInventory(newInventoryInfo));
        }}
      />
    </div>
  );
};

export default connect()(CreateInventoryForm);
