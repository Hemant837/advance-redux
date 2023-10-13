import React from "react";
import CartButton from "../Cart/CartButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Redux Cart</h2>
      <CartButton />
    </nav>
  );
};

export default Navbar;
