import React from "react";
import { bottom1, bottom2, bottom3 } from "../images";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <ul className="header-bottom-menu">
          <li>
            <img src={bottom1} alt="header-bottom-img" />
            <span>Shopify Integrated</span>
          </li>
          <li>
            <img src={bottom2} alt="header-bottom-img" />
            <span>Amazon Certified</span>
          </li>
          <li>
            <img src={bottom3} alt="header-bottom-img" />
            <span>Eco-Friendly</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
