import React, { Component } from "react";
import Input from "./productAdd/inputForm";
import { toast } from "react-toastify";
class ProductUpdate extends Component {
  state = {
    loading: false,
    products: [],
    fields: ["name", "price", "type", "profit"],
  };

  componentDidMount() {
    this.getLists();
    console.log(this.state.products);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      const item = this.props.match.params.id;
      fetch("http://localhost:3002/products/" + item)
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

  handleChange = ({ currentTarget }) => {
    const products = { ...this.state.products };
    products[currentTarget.name] = currentTarget.value;
    this.setState({
      products,
    });
  };

  handleSubmit = () => {
    toast("Data Updated");
    const item = this.props.match.params.id;
    fetch("http://localhost:3002/products/" + item, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.products),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          products: {
            name: "",
            price: "",
            type: "",
            profit: "",
          },
        });
        this.getLists();
      });
  };

  render() {
    const { products } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.fields.map((field) => (
          <Input
            products={products}
            onChange={this.handleChange}
            field={field}
          />
        ))}
        <button className="btn-primary"> Save</button>
      </form>
    );
  }
}

export default ProductUpdate;
