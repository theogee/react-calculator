import React, { Component } from "react";
import backspace from "../backspace.svg";

class Misc extends Component {
  render() {
    return (
      <div className="misc">
        <button id="clear-button" onClick={this.props.clear}>
          AC
        </button>
        <button id="delete-button" onClick={this.props.delete}>
          <img src={backspace} alt="" />
        </button>
      </div>
    );
  }
}

export default Misc;
