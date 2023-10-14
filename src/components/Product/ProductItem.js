import React from "react";
import { cartActions } from "../../store/cart-slice";
import "./ProductItem.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <li className="product-item">
      <header>
        <h3>{title}</h3>
        <p>${price}</p>
      </header>
      <p>{description}</p>
      <div className="action-button" onClick={addToCartHandler}>
        Add to Cart
      </div>
    </li>
  );
};

export default ProductItem;
