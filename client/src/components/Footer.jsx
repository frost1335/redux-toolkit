import React from "react";
import { logo } from "../images";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="container">
        <ul className="footer-menu">
          <li className="footer-item">
            <div className="footer-logo">
              <img src={logo} alt="footer-logo" />
            </div>
          </li>
          <li className="footer-item">
            <ul className="menu-list">
              <li>Custom Design</li>
              <li>All Products</li>
              <li>Inspiration</li>
              <li>Sustainability</li>
              <li>Affiliate Program</li>
              <li>Request Custom Quote</li>
              <li>Request Dieline</li>
            </ul>
          </li>
          <li className="footer-item">
            <ul className="menu-list">
              <li>About Us</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
            </ul>
          </li>
          <li className="footer-item">
            <ul className="menu-list">
              <li>Shopify App</li>
              <li>14 Day Free Shopify Trial</li>
              <li>BigCommerce</li>
              <li className="item-icons">
                <button className="facebook">
                  <FacebookOutlinedIcon />
                </button>
                <button className="twitter">
                  <TwitterIcon />
                </button>
                <button className="instagram">
                  <InstagramIcon />
                </button>
              </li>
            </ul>
          </li>
          <li className="footer-item">
            <ul className="menu-list">
              <li>Get exclusive offers and tips.</li>
              <li>
                <input
                  type="text"
                  className="footer-input"
                  placeholder="Your email"
                />
              </li>
              <li>
                <button className="footer-button">Join instantly</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
