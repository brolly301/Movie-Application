import React from "react";
import { Link } from "react-router-dom";

export default function SpecialOfferHome({ children, title, image, ...rest }) {
  return (
    <div {...rest} className="special-offer-home-container">
      <h3>{children}</h3>
      <img className="special-offers-home-image" src={image} alt="" />
      <Link to={"/specialOffers"}>
        <button className="special-offers-home-button">More Details</button>
      </Link>
    </div>
  );
}
