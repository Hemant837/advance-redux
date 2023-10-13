import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <li className="product-item">
      <header>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </header>
      <p>{product.description}</p>
      <div className="action-button">Add to Cart</div>
    </li>
  );
};

export default ProductItem;
