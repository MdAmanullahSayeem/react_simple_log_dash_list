import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        SweetiTech
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link active" to="/products/add">
            Add Product
          </NavLink>

          <NavLink className="nav-link active" to="/products/all">
            All Products
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
