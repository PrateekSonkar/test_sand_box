const binInventoriesReducerDefaultState = [];
const binInventoriesReducer = (
  state = binInventoriesReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "ADD_NEW_INVENTORY":
      return [...state, action.inventory];

    default:
      return state;
  }
};

export default binInventoriesReducer;
