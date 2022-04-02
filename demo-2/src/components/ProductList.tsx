import React from "react";

interface IProps {
  products: string[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
};

export default ProductList;
