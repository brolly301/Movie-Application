import React from "react";
import LoyaltyIcon from "../components/LoyaltyPage/LoyaltyIcon";
import Popcorn from "../images/popcorn.png";
import Food from "../images/food.png";
import Ticket from "../images/ticket.png";
import { Link } from "react-router-dom";
import "../CSS/Loyalty/LoyaltyPage.css";

export default function LoyaltyPage() {
  return (
    <div className="loyalty-container">
      <div className="loyalty-text-container">
        <h1>Loyalty Points</h1>
        <p>
          With our loyalty points system, you can redeem free movies and cinema
          food! Each movie will give you 20 points and selected cinema food will
          give you different points depending on which item you purchase. It
          costs 100 points to redeem a free movie and 50 points each food item
          with your loyalty points.
        </p>
      </div>
      <div className="loyalty-icons-container">
        <LoyaltyIcon image={Popcorn} points="10 Points">
          Popcorn
        </LoyaltyIcon>

        <LoyaltyIcon image={Ticket} points="20 Points">
          Movies
        </LoyaltyIcon>
        <LoyaltyIcon image={Food} points="10 Points">
          Drinks & Snacks
        </LoyaltyIcon>
      </div>
      <div className="loyalty-button-container">
        <Link className="loyalty-link" to="/login">
          <button className="loyalty-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
