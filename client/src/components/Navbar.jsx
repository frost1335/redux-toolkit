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
          <Link to="/start">Start your design</Link>
        </li>
        <li>
          <Link to="/products">All products</Link>
        </li>
        <li>
          <Link to="/inspiration">Inspiration</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="nav-account">
        <Link to="/account">Account</Link>
        <ShoppingCart />
      </div>
    </>
  );
};

export default Navbar;
