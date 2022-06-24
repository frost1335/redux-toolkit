import React from "react";
import { header } from "../images";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            Fast and easy custom boxes your customers will love
          </h1>
          <h5>
            Fastest turnaround. Best prices instantly. Dieline design help
            available.
          </h5>
          <button>Start your design</button>
          <div className="header-img">
            <img src={header} alt="header-jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
