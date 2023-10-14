import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Product/Products";

function App() {
  const showCart = useSelector((state) => state.showCart.isCartVisible);
  return (
    <Fragment>
      <Navbar />
      {showCart && <Cart />}
      <Products />
    </Fragment>
  );
}

export default App;
