//ADD_NEW_BIN
import shortid from "shortid";

export const addNewBin = ({
  binname = "",
  bincode = "",
  bincap = "",
  binmanufacturer = ""
} = {}) => ({
  type: "ADD_NEW_BIN",
  bintype: {
    id: shortid.generate(),
    binname,
    bincode,
    bincap,
    binmanufacturer
  }
});

//UPDATE_BIN_INFO

//DELETE_BIN
