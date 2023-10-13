import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import CartItem from "./components/Cart/CartItem";
import Products from "./components/Product/Products";

function App() {
  const showCart = useSelector((state) => state.showCart.isCartVisible);
  return (
    <Fragment>
      <Navbar />
      {showCart && <CartItem />}
      <Products />
    </Fragment>
  );
}

export default App;
