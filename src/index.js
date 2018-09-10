import React from "react";
import ReactDOM from "react-dom";
import SmallCardComponent from "./SmallCardComponent";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxtexts: [
        "this is chicken",
        "this is vegetable",
        "this is fresh fish",
        "this is chicken",
        "this is vegetable",
        "this is fresh fish",
        "this is chicken",
        "this is vegetable",
        "this is fresh fish"
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="parentDiv">
          {this.state.boxtexts.map((boxtext, index) => (
            <SmallCardComponent key={index} boxtext={boxtext} />
          ))}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
