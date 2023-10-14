import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CartItem.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <div className="cart">
      <div className="cart-item-head">
        <p className="cart-title">{title}</p>
        <p className="cart-price">${price}</p>
      </div>
      <div className="cart-item-foot">
        <p className="quantity">x{quantity}</p>
        <div className="action-buttons">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
      ${total}
    </div>
  );
};

export default CartItem;
