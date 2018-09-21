// ADD_NEW_INVENTORY
export const addNewInventory = ({
  lotname = "",
  lotquantity = "",
  lotnumber = "",
  bintype = "",
  createdAt = ""
} = {}) => ({
  type: "ADD_NEW_INVENTORY",
  inventory: {
    lotname,
    lotnumber,
    lotquantity,
    bintype,
    createdAt
  }
});
