import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import firebase from "../firebase/firebase";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { addNewBin } from "../src/actions/binTypesActions";
import "./styles.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(
  addNewBin({
    id: "V-EY4NDrxr",
    binname: "Dummy Bin",
    bincode: "1212",
    bincap: "12",
    binmanufacturer: "AND"
  })
);
store.dispatch(
  addNewBin({
    id: "EEY4NDrxr",
    binname: "Dummy 2",
    bincode: "0124",
    bincap: "20",
    binmanufacturer: "MKL"
  })
);
store.subscribe(() => {
  console.log("from Index : ", store.getState());
});

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

console.log("from Index : ", store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(jsx, rootElement);

// console.log(firebase.name);
// console.log(firebase.database());
// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Prateek"
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(e => {
//     console.log("failed : ", e);
//   });

// const database = firebase.database();

// database.ref("expense").push({
//   description: "Tea",
//   notes: "Event Tea",
//   amount: 25,
//   createdAt: 10000
// });

// database.ref("expense").push({
//   description: "Coffe",
//   notes: "Morning Coffee",
//   amount: 28,
//   createdAt: 15000
// });

// database.ref("expense").push({
//   description: "Shakes",
//   notes: "Brunch Shake",
//   amount: 64,
//   createdAt: 15000
// });

// database.ref("expense").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
