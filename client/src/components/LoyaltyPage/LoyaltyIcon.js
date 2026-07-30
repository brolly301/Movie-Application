import React from "react";
import "../../CSS/Loyalty/LoyaltyIcon.css";

export default function LoyaltyIcon({ number, title, icon, points, children }) {
  return (
    <article className="loyalty-icon-container">
      <span className="loyalty-icon-graphic">{icon}</span>
      <span className="loyalty-icon-number">{number}</span>
      <h2>{title}</h2>
      <strong>{points}</strong>
      <p>{children}</p>
    </article>
  );
}
