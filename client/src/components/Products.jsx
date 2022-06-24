import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products-header">
          <h3>Products you can customize</h3>
          <button>Browse all products</button>
        </div>
        <div className="products-content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products-bottom">
          <p>Need unbranded stock items?</p>
          <button>Shop stock</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
