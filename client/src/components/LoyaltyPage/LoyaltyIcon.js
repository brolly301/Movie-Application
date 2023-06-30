import React from "react";
import "../../CSS/Loyalty/LoyaltyIcon.css";

export default function LoyaltyIcon({ children, points, image, ...rest }) {
  return (
    <div className="loyalty-icon-container">
      <h2>{children}</h2>
      <hr />
      <img src={image} alt="" />
      <hr />
      <h3>{points}</h3>
    </div>
  );
}
