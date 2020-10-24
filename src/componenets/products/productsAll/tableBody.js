import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableBody extends Component {
  render() {
    const { products, handleDelete } = this.props;
    return (
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.profit}</td>
            <button
              onClick={() => handleDelete(item)}
              className="btn btn-secondary"
            >
              Delete
            </button>
            <Link
              to={`/products/update/${item.id}`}
              className="btn btn-primary"
            >
              Update
            </Link>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
