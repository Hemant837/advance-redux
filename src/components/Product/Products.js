import React from "react";
import ProductItem from "../Product/ProductItem";

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      description: "Description for Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$24.99",
      description: "Description for Product 2",
    },
  ];

  return (
    <ul>
      {productData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Products;
