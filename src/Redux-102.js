import { createStore, combineReducers } from "redux";
import shortid from "shortid";
import _lodash from "lodash";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: shortid.generate(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_TEXT_FILTER
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});
//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});
//Expenses reducers
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

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const binTypesReducerDefaultState = [];
const binTypesReducer = (state = binTypesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const binInventoriesReducerDefaultState = [];
const binInventoriesReducer = (
  state = binInventoriesReducerDefaultState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const binRequestReducerDefaultState = [];
const binRequestReducer = (state = binRequestReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    bintypes: binTypesReducer,
    binrequests: binRequestReducer,
    inventories: binInventoriesReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 1 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "coffee", amount: 3 })
// );
// const expenseThree = store.dispatch(
//   addExpense({ description: "tea", amount: 2 })
// );

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 8 }));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "112",
      description: "REnt",
      note: "In Jan",
      amount: 545454,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
