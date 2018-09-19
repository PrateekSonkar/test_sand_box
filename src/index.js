import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import firebase from "../firebase/firebase";
// import SmallCardComponent from "./SmallCardComponent";
// import CreateInventory from "./CreateInventory";
// import CreateBinType from "./CreateBinType";
// import ViewInventory from "./ViewInventory";
// import RequestInventory from "./RequestInventory";
// import ViewBinRequest from "./ViewBinRequest";

import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       boxtexts: [
//         "this is chicken",
//         "this is vegetable",
//         "this is fresh fish",
//         "this is chicken",
//         "this is vegetable",
//         "this is fresh fish",
//         "this is chicken",
//         "this is vegetable",
//         "this is fresh fish"
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>Text goes here</div>
//         <div className="parentDiv">
//           {this.state.boxtexts.map((boxtext, index) => (
//             <SmallCardComponent key={index} boxtext={boxtext} />
//           ))}
//         </div>
//         <div className="container">
//           <CreateInventory />
//         </div>
//         <div className="row">
//           <b>New Bin 1 </b>
//           <div className="container">
//             <CreateBinType />
//           </div>
//         </div>
//         <div className="row">
//           <ViewInventory />
//         </div>
//         <div className="row">
//           <RequestInventory />
//         </div>
//         <div className="row">
//           <ViewBinRequest />
//         </div>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );
// }

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

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
