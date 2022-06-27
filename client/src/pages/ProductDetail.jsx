import { Rating } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { BASE_URL } from "../constants";
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
                  src={BASE_URL + product?.data?.img[0].large.path}
                  alt="product-img"
                />
              </div>
              <div className="detail-info">
                <span className="description-title">
                  Some info about product:
                </span>
                <p className="product-description">
                  {product?.data?.description}
                </p>
                <h5>
                  <span className="price-subt">Price: </span>{" "}
                  {formatter.format(product?.data?.price)}
                </h5>
                <span className="rating-subt">Rating: </span>
                <Rating
                  value={product?.data?.rating}
                  className="detail-rating"
                  readOnly
                  size="large"
                />
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
