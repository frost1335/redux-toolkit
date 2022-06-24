import React from "react";
import { request1, request2 } from "../images";

const Request = () => {
  return (
    <div className="request">
      <div className="container">
        <div className="request-box">
          <div className="request-block">
            <div className="block-img">
              <img src={request1} alt="arka-img" />
            </div>
            <h4>Couldn't find a size you need?</h4>
            <p>
              We’ll work directly with you to create a fully branded packaging
              system.
            </p>
            <button>Request a quote</button>
          </div>
          <div className="request-block">
            <div className="block-img">
              <img src={request2} alt="arka-img" />
            </div>
            <h4>Need a free dieline template?</h4>
            <p>
              Let us know what size you need and we'll email an Adobe
              Illustrator dieline to you within 3-4 business days.
            </p>
            <button>Request dieline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
