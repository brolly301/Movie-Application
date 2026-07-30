import React from "react";
import "../../CSS/SpecialOffers/SpecialOffers.css";

export default function SpecialOffer({ offer }) {
  const { title, image, price, details, availability } = offer;
  return (
    <div className="special-offers-container">
      <img
        className="special-offers-image"
        src={image}
        alt={`${title} cinema offer`}
        loading="lazy"
      />
      <div className="special-offers-content">
        <div className="special-offers-title">
          <h2>{title}</h2>
          <strong>{price}</strong>
        </div>
        <p>{details}</p>
        <span>{availability}</span>
      </div>
    </div>
  );
}
