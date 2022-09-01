import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";
import { useAction } from "../hooks/actions";

const formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const Card = ({ product, favorite }) => {
  const { addProduct, removeProduct } = useAction();

  if (!product) return "";

  const addToFavorites = (e) => {
    e.preventDefault();

    addProduct(product);
  };

  const removeFromFavorites = (e) => {
    e.preventDefault();

    removeProduct(product._id);
  };

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
            <div className="card-bottom">
              {favorite ? (
                <Tooltip placement="top" title="Remove product">
                  <button className="info-button" onClick={removeFromFavorites}>
                    Delete from favorites
                  </button>
                </Tooltip>
              ) : (
                <Tooltip placement="top" title="Add product">
                  <button className="info-button" onClick={addToFavorites}>
                    Add to favorite
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
