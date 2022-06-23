import React, { Component } from "react";

class Operations extends Component {
  render() {
    return (
      <div className="operations">
        {this.props.operations.map((operator) => (
          <button key={operator} onClick={() => this.props.operate(operator)}>
            {operator}
          </button>
        ))}
      </div>
    );
  }
}

export default Operations;
