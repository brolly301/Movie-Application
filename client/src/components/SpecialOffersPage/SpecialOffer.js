import React from "react";
import "../../CSS/SpecialOffers/SpecialOffers.css";

const SpecialOffer = ({ children, details, image }) => {
  return (
    <div className="special-offers-container">
      <h2>{children}</h2>
      <div className="special-offers-image-container">
        <img src={image} />
      </div>
      <p>{details}</p>
    </div>
  );
};

export default SpecialOffer;
