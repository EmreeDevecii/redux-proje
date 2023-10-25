// components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Anasayfa
        </Link>
        <Link className="nav-link" to="/books">
          KitapListesi
        </Link>
        <Link className="nav-link" to="/cart">
          Sepet <span className="badge bg-secondary">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
