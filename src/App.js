import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./componenets/navbar/navbar";
import Login from "./componenets/login/login";
import Products from "./componenets/products/productsAll/productAll";
import ProducForm from "./componenets/products/productAdd/producForm";
import ProductUpdate from "./componenets/products/productUpdate";
import DashBoard from "./componenets/dashBoard/dashBoard";
import About from "./componenets/about/about";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/products/add" component={ProducForm} />
            <Route path="/products/all" component={Products} />
            <Route path="/products/update/:id" component={ProductUpdate} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
