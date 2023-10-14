import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCartActions } from "../../store/ui-slice";
import "./CartButton.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(showCartActions.toogle());
  };

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
