import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";

const formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const Card = ({ product }) => {
  if (!product) return "";
  return (
    <div className="card-box">
      <Link to={`/product/${product._id}`}>
        <div className="card">
          <div className="card-img">
            <img src={BASE_URL + product.img[0].large.path} alt="product-img" />
          </div>
          <div className="card-body">
            <h4>{product.name}</h4>
            <div className="body-text">
              <p className="text">
                {product.description.length > 50
                  ? `${product.description.substring(0, 50)}...`
                  : product.description}
              </p>
              <div className="price">
                <span className="price-text">Starting at:</span>
                <span className="price-num">
                  {formatter.format(product.price)}/unit
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
