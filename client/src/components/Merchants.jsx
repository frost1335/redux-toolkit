import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import {
  google,
  merchant1,
  merchant2,
  merchant3,
  merchant4,
  merchant5,
  merchant6,
  shopify,
  user1,
  user2,
  user3,
} from "../images";

const Merchants = () => {
  return (
    <div className="merchants">
      <h3>Merchants love Arka</h3>
      <div className="container">
        <div className="merchants-box">
          <div className="merchants-header">
            <div className="header-box">
              <div className="box-img">
                <img src={google} alt="merchant-header-img" />
              </div>
              <div className="box-rating">
                <Rating
                  readOnly
                  value={4.6}
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.4 }} fontSize="inherit" />
                  }
                />
                <span className="rating-value">4.6</span>
              </div>
            </div>
            <div className="header-box">
              <div className="box-img">
                <img src={shopify} alt="merchant-header-img" />
              </div>
              <div className="box-rating">
                <Rating
                  style={{ opacity: 0.6 }}
                  readOnly
                  value={4.6}
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.4 }} fontSize="inherit" />
                  }
                />
                <span className="rating-value">4.6</span>
              </div>
            </div>
          </div>
          <div className="merchant-box">
            <div className="box-left">
              <div className="box-img">
                <img src={merchant1} alt="merchant-img" />
              </div>
              <div className="box-img">
                <img src={merchant2} alt="merchant-img" />
              </div>
            </div>
            <div className="box-right">
              <p className="box-text">
                “Arka’s team is super fast, knowledgeable, and easy to work with
                - highly recommended!”
              </p>
              <div className="box-user">
                <div className="user">
                  <div className="user-img">
                    <img src={user1} alt="user-img" />
                  </div>
                  <div className="user-info">
                    <h5 className="user-name">Jesse</h5>
                    <h5 className="user-descript">Subscription Catalyst</h5>
                  </div>
                </div>
                <button>Their story</button>
              </div>
            </div>
          </div>
          <div className="merchant-box">
            <div className="box-right">
              <p className="box-text">
                “I really like Arka because it’s a really nice box, I’ve gotten
                a lot of compliments on&nbsp;it.”
              </p>
              <div className="box-user">
                <div className="user">
                  <div className="user-img">
                    <img src={user2} alt="user-img" />
                  </div>
                  <div className="user-info">
                    <div className="user-name">Leslie</div>
                    <div className="user-descript">Burgundy Fox</div>
                  </div>
                </div>
                <button>Their story</button>
              </div>
            </div>
            <div className="box-left">
              <div className="box-img">
                <img src={merchant3} alt="merchant-img" />
              </div>
              <div className="box-img">
                <img src={merchant4} alt="merchant-img" />
              </div>
            </div>
          </div>
          <div className="merchant-box">
            <div className="box-left">
              <div className="box-img">
                <img src={merchant5} alt="merchant-img" />
              </div>
              <div className="box-img">
                <img src={merchant6} alt="merchant-img" />
              </div>
            </div>
            <div className="box-right">
              <p className="box-text">
                “I love how easily it was to customize the box, and you guys
                were more affordable.”
              </p>
              <div className="box-user">
                <div className="user">
                  <div className="user-img">
                    <img src={user3} alt="user-img" />
                  </div>
                  <div className="user-info">
                    <div className="user-name">Anthony</div>
                    <div className="user-descript">Lipstick Junkie</div>
                  </div>
                </div>
                <button>Their story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchants;
