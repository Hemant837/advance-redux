import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart">
      <h2 className="cart-heading">Shopping Cart</h2>
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-item-head">
            <p className="cart-title">Test Item</p>
            <p className="cart-price">$9.99</p>
          </div>
          <div className="cart-item-foot">
            <p className="quantity">x3</p>
            <div className="action-buttons">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
