import React, { useEffect } from "react";
import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../services/productApi";
import Card from "./Card";

const Products = () => {
  const [deleteProduct, { isFetching }] = useDeleteProductMutation();
  const { data: productsList, isLoading } = useGetProductsQuery();
  const [products, setProducts] = useState(productsList?.data);

  useEffect(() => {
    setProducts(productsList?.data);
  }, [productsList]);

  const deleteHandler = async () => {
    await deleteProduct("62b6d64f964b7ba842ff6db1");
  };

  console.log(products);

  if (isLoading || isFetching) return "Loading...";

  return (
    <div className="products">
      <div className="container">
        <div className="products-header">
          <h3>Products you can customize</h3>
          <button onClick={deleteHandler}>Browse all products</button>
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
