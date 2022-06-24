import React from "react";
import { advantage1, advantage2, advantage3 } from "../images";

const Advantage = () => {
  return (
    <div className="advantage">
      <h3>The Arka advantage</h3>
      <div className="advantage-content">
        <div className="content-card">
          <div className="card-img">
            <img src={advantage1} alt="advantage-img" />
          </div>
          <h4>Eco-Friendly Material</h4>
          <p>
            Order as little as 10, giving you the lowest minimums in the
            industry at the best prices.
          </p>
        </div>
        <div className="content-card">
          <div className="card-img">
            <img src={advantage2} alt="advantage-img" />
          </div>
          <h4>Full Outside Print</h4>
          <p>
            Design what you want - no extra cost! Prices include 100% exterior
            print, change design whenever!
          </p>
        </div>
        <div className="content-card">
          <div className="card-img">
            <img src={advantage3} alt="advantage-img" />
          </div>
          <h4>Proofing</h4>
          <p>
            After you order, our internal designers help make sure your designs
            are 100% ready for printing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
