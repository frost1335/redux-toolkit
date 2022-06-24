import React from "react";
import { productImg } from "../images";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-box">
      <Link to="/product/">
        <div className="card">
          <div className="card-img">
            <img src={productImg} alt="product-img" />
          </div>
          <div className="card-body">
            <h4>Custom Carton Boxes</h4>
            <div className="body-text">
              <p className="text">
                Create a clean brand presentation with this custom carton box.
              </p>
              <div className="price">
                <span className="price-text">Starting at:</span>
                <span className="price-num">$10.44/unit</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
