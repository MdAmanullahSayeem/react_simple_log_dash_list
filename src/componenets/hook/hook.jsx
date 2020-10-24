import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>Increase</button>
      </React.Fragment>
    );
  }
}

export default Counter;
