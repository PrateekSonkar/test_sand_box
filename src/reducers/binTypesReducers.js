const binTypesReducerDefaultState = [];
const binTypesReducer = (state = binTypesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_BIN":
      return [...state, action.bintype];
    default:
      return state;
  }
};

export default binTypesReducer;
