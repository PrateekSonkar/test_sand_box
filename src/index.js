import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
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

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
