import { createStore, combineReducers, compose } from "redux";
import "../reducers/temp";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import binTypesReducer from "../reducers/binTypesReducers";
import binRequestReducer from "../reducers/binRequests";
import binInventoriesReducer from "../reducers/binInventories";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      bintypes: binTypesReducer,
      binrequests: binRequestReducer,
      inventories: binInventoriesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
