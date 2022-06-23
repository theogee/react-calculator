import React, { Component } from "react";
import { evaluate, format } from "mathjs";
import "./App.css";

import Display from "./components/Display";
import Misc from "./components/Misc";
import Numbers from "./components/Numbers";
import Operations from "./components/Operations";

class App extends Component {
  state = {
    currentDisplay: "0",
    numOrder: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    operations: ["÷", "×", "-", "+", "="],
    precision: 5,
  };

  render() {
    return (
      <React.Fragment>
        <div id="calculator">
          <Display currentDisplay={this.state.currentDisplay} />
          <Misc clear={this.clear} delete={this.delete} />
          <Numbers
            numOrder={this.state.numOrder}
            clickNumber={this.clickNumber}
            operate={this.operate}
          />
          <Operations
            operations={this.state.operations}
            operate={this.operate}
          />
        </div>
        <p>Made by Theo Gee</p>
      </React.Fragment>
    );
  }

  clickNumber = (n) => {
    const { currentDisplay } = this.state;

    this.setState(
      currentDisplay === "0"
        ? { currentDisplay: n.toString() }
        : { currentDisplay: currentDisplay + n.toString() }
    );
  };

  delete = () => {
    const { currentDisplay } = this.state;

    this.setState(
      currentDisplay.length === 1 ||
        currentDisplay === "Infinity" ||
        (currentDisplay.length === 2 && currentDisplay[0] === "-")
        ? { currentDisplay: "0" }
        : { currentDisplay: currentDisplay.slice(0, -1) }
    );
  };

  clear = () => this.setState({ currentDisplay: "0" });

  operate = (opr) => {
    const { currentDisplay } = this.state;

    if (/[0-9]$/.test(currentDisplay)) {
      if (opr === "=") this.compute(currentDisplay);
      else {
        if (opr !== ".") {
          this.setState({ currentDisplay: currentDisplay + opr });
          return;
        }

        if (opr === "." && !currentDisplay.includes("."))
          this.setState({ currentDisplay: currentDisplay + opr });
      }
    }
  };

  compute = (currentDisplay) => {
    const buffer = currentDisplay.replace("÷", "/").replace("×", "*");
    this.setState({
      currentDisplay: format(evaluate(buffer), {
        precision: this.state.precision,
      }),
    });
  };
}

export default App;
