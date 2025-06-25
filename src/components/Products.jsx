import React from "react";
import ProductCard from "./Productcard";
import { products } from "../data/products";

const Products = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default Products;
