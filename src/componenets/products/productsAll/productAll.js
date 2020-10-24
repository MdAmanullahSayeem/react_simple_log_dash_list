import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import { paginate } from "./../utils/paginate";
import Pagination from "./pagination";
import EmptyCheck from "./emptyCheck";

class Products extends Component {
  state = {
    loading: false,
    products: [],
    headers: ["name", "price", "type", "profit"],
    pageSize: 3,
    currentPage: 1,
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
  hadleDelete = (item) => {
    let newProducts = this.state.products.filter(
      (m) =>
        this.state.products.indexOf(m) !== this.state.products.indexOf(item)
    );
    this.setState({
      products: newProducts,
    });
  };
  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { products, currentPage, pageSize } = this.state;
    const productsInPage = paginate(products, currentPage, pageSize);
    const { headers } = this.state;
    return (
      <div>
        <EmptyCheck products={products} />

        <table className="table">
          <TableHeader headers={headers} />
          <TableBody
            products={productsInPage}
            handleDelete={this.hadleDelete}
          />
        </table>
        <Pagination
          itemsCount={products.length}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
