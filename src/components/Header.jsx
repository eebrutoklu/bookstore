import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbar border-top bg-body-tertiary ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <img
            src="../public/images/iconlogo.png"
            alt=""
            style={{ width: 35 }}
          />
          <Link to="/" className="logo">
            PinkeyebBooks
          </Link>
        </span>
        <nav className="d-flex gap-2 text-dark">
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
