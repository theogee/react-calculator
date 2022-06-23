import React, { Component } from "react";

class Numbers extends Component {
  render() {
    return (
      <div className="numbers">
        {this.props.numOrder.map((number) => (
          <button key={number} onClick={() => this.props.clickNumber(number)}>
            {number}
          </button>
        ))}
        <button onClick={() => this.props.operate(".")}>.</button>
      </div>
    );
  }
}

export default Numbers;
