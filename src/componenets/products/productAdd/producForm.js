import React, { Component } from "react";
import Input from "./inputForm";
import { toast } from "react-toastify";
class ProducForm extends Component {
  state = {
    fields: ["name", "price", "type", "profit"],
    products: {
      name: "",
      price: "",
      type: "",
      profit: "",
    },
    errors: {},
  };

  handleChange = ({ currentTarget }) => {
    const products = { ...this.state.products };
    products[currentTarget.name] = currentTarget.value;
    this.setState({
      products,
    });
  };

  validateProperty = () => {
    const errors = {};
    const { products } = this.state;
    if (products.name === "") {
      errors["name"] = "Name is required";
    }
    if (products.profit >= 1) {
      errors["profit"] = "profit must be percentage like as 0.2, 0.5 ";
    }
    return errors;
  };

  addProduct = () => {
    toast("Product added");
    fetch("http://localhost:3002/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.products),
    });
    this.props.history.replace("/products/all/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validateProperty();
    this.setState({ errors });
    if (errors.name || errors.profit) {
      return false;
    }
    this.addProduct();
  };

  render() {
    const { errors, products } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {errors.success && (
          <div className="alert alert-success">{errors.success}</div>
        )}

        {this.state.fields.map((field) => (
          <Input
            products={products}
            onChange={this.handleChange}
            field={field}
          />
        ))}
        {errors.name && <div className="alert alert-danger">{errors.name}</div>}
        {errors.profit && (
          <div className="alert alert-danger">{errors.profit}</div>
        )}

        <button className="btn-primary"> Save</button>
      </form>
    );
  }
}
export default ProducForm;
