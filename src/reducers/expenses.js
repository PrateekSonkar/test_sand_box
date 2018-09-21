import _lodash from "lodash";

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      let index = _lodash.findIndex(state, { id: action.id });
      state.splice(index, 1);
      return state;
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id == action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
