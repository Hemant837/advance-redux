import React from "react";
import ProductItem from "../Product/ProductItem";

const Products = () => {
  const productData = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      description: "Description for Product 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 24.99,
      description: "Description for Product 2",
    },
  ];

  return (
    <ul>
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  );
};

export default Products;
