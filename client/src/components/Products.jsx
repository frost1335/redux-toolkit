import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/productApi";
import Card from "./Card";
import Loader from "./Loader";

const Products = ({ simplified }) => {
  const count = simplified ? 6 : 0;
  const { data: productsList, isLoading } = useGetProductsQuery(count);

  console.log(productsList?.data);

  return (
    <div className="products">
      <div className="container">
        <div className="products-header">
          {simplified ? (
            <h3>Products you can customize</h3>
          ) : (
            <h3>All products</h3>
          )}
          {simplified && <Link to="/products">Browse all products</Link>}
        </div>
        <div className="products-content">
          {isLoading ? (
            <Loader />
          ) : productsList?.data?.length > 0 ? (
            productsList?.data?.map((p, idx) => <Card key={idx} product={p} />)
          ) : (
            <p className="empty-text">There is no products</p>
          )}
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
