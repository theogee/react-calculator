import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <input value={this.props.currentDisplay} disabled />
      </div>
    );
  }
}

export default Display;
