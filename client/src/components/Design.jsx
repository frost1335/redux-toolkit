import React from "react";
import { design1, design2, design3 } from "../images";

const Design = () => {
  return (
    <div className="design">
      <div className="container">
        <div className="design-box">
          <h3>Fast and easy custom boxes your customers will love</h3>
          <div className="design-content">
            <div className="content-card">
              <div className="card-img">
                <img src={design1} alt="design-img" />
              </div>
              <h4>You Order</h4>
              <p>Design and order boxes in a few clicks.</p>
            </div>
            <div className="content-card">
              <div className="card-img">
                <img src={design2} alt="design-img" />
              </div>
              <h4>We Proof</h4>
              <p>Approve your designs before production.</p>
            </div>
            <div className="content-card">
              <div className="card-img">
                <img src={design3} alt="design-img" />
              </div>
              <h4>We Print & Ship</h4>
              <p>Your order gets printed and shipped with tracking.</p>
            </div>
          </div>
          <div className="button-box">
            <button>Start your design</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
