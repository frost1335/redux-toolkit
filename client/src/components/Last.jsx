import React from "react";
import { Link } from "react-router-dom";

const Last = () => {
  return (
    <div className="last">
      <h3>Let`s get to it</h3>
      <div className="last-buttons">
        <button className="gray-button">Start your design</button>
        <Link to="/products" className="white-button">
          Browse all products
        </Link>
      </div>
    </div>
  );
};

export default Last;
