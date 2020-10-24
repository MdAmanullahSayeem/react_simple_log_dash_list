import React, { Component } from "react";
import _ from "lodash";
import EmptyCheck from "../products/productsAll/emptyCheck";

class DashBoard extends Component {
  state = {
    loading: false,
    products: [],
    sortByField: {
      field: "profit",
      ordering: "desc",
    },
  };

  componentDidMount() {
    this.getLists();
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            loading: false,
            products: result,
          })
        )

        .catch(console.log);
    });
  }

  render() {
    const { products, sortByField } = this.state;
    const sortedList = _.orderBy(
      products,
      [sortByField.field],
      [sortByField.ordering]
    );
    const firstItems = sortedList.slice(0, 5);
    return (
      <div>
        <EmptyCheck products={this.state.products} />

        <div>We have {this.state.products.length} products</div>
        <h3>Our top 05 Profitable Products:</h3>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>profit(%)</th>
          </thead>
          <tbody>
            {firstItems.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashBoard;
