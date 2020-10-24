import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        {this.props.headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </thead>
    );
  }
}

export default TableHeader;
