import React from "react";
import { useDispatch } from "react-redux";
import { showCartActions } from "../../store/ui-slice";
import "./CartButton.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(showCartActions.toogle());
  };

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span> <span>0</span>
    </button>
  );
};

export default CartButton;
