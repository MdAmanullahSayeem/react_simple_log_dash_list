import React, { Component } from "react";

class EmptyCheck extends Component {
  counter = () => {
    const totlal = this.props.products.length;
    if (totlal === 0) {
      const masaage =
        "There is No Product. run json-server --watch db.json --port 3002";
      return masaage;
    }
  };
  render() {
    return (
      <div style={{ marginBottom: "15px", fontSize: "24px", color: "red" }}>
        {" "}
        {this.counter()}
      </div>
    );
  }
}

export default EmptyCheck;
