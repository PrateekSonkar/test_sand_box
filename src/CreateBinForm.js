import React from "react";
import { connect } from "react-redux";
import CreateBinType from "./CreateBinType";
import { addNewBin } from "./actions/binTypesActions";

const CreateBinForm = props => {
  return (
    <div>
      <CreateBinType
        onSubmit={newBinInfo => {
          console.log("New Bin Info : ", newBinInfo);
          props.dispatch(
            addNewBin({
              bincap: newBinInfo.capacity,
              bincode: newBinInfo.code,
              binmanufacturer: newBinInfo.manufacturer,
              binname: newBinInfo.name
            })
          );
        }}
      />
    </div>
  );
};

export default connect()(CreateBinForm);
