import Card from "../components/Card";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favoritesState);

  console.log(favorites);

  return (
    <div className="favorites">
      <div className="container">
        <div className="products-header">
          <h3>Favorites</h3>
          <Link to="/products">Browse all products</Link>
        </div>
        <div className="products-content">
          {favorites.map((product, index) => (
            <Card key={product._id + index} product={product} favorite />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
