import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../images";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo-svg" />
        </Link>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/control">Start your design</Link>
        </li>
        <li>
          <Link to="/products">All products</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="#">Inspiration</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
      </ul>
      <div className="nav-account">
        <Link to="#">Account</Link>
        <ShoppingCart />
      </div>
    </>
  );
};

export default Navbar;
