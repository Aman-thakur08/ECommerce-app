import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductList from "../components/ProductList";

const Category = () => {
  const { id } = useParams();
  const categoryProducts = products.filter(
    (product) => product.categoryId === id
  );

  return (
    <div>
      <h1>Category Products</h1>
      <ProductList products={categoryProducts} />
    </div>
  );
};

export default Category;
