import { Rating } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetProductQuery } from "../services/productApi";

const formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);

  return (
    <div className="product-detail">
      {isLoading && !product ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="detail-box">
            <header className="detail-header">
              <h4>{product?.data?.name}</h4>
              <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/products">All products</Link>
              </div>
            </header>

            <div className="detail-body">
              <div className="detail-img">
                <img
                  src={product?.data?.img[0].original.path}
                  alt="product-img"
                />
              </div>
              <div className="detail-info">
                <p className="product-description"></p>
                <h5>{product?.data?.price}</h5>
                <Rating value={product?.data?.rating} readOnly size="large" />
                <button>
                  Buy for {formatter.format(product?.data?.price)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
