import React from "react";
import LoyaltyIcon from "../components/LoyaltyPage/LoyaltyIcon";
import useUserContext from "../hooks/useUserContext";
import { Link } from "react-router-dom";
import "../CSS/Loyalty/LoyaltyPage.css";
import { FaRegUser, FaTicketAlt, FaGift } from "react-icons/fa";

export default function LoyaltyPage() {
  const { userData } = useUserContext();
  const isLoggedIn = Boolean(userData.user);
  const points = Number(userData.loyaltyPoints) || 0;

  return (
    <main className="loyalty-container">
      <header className="loyalty-text-container">
        <span className="loyalty-eyebrow">Movie Dome Rewards</span>
        <h1>Watch movies. Earn rewards.</h1>
        <p>
          Earn points whenever you complete a paid booking, then exchange them
          for a free cinema ticket.
        </p>
        {isLoggedIn && (
          <div className="loyalty-current-points">
            <span>Your balance</span>
            <strong>{points} points</strong>
          </div>
        )}
      </header>
      <section
        className="loyalty-icons-container"
        aria-label="How rewards work"
      >
        <LoyaltyIcon
          number="01"
          icon={<FaRegUser />}
          title="Join"
          points="Free"
        >
          Create an account to start collecting points with your bookings.
        </LoyaltyIcon>

        <LoyaltyIcon
          number="02"
          icon={<FaTicketAlt />}
          title="Earn"
          points="20 points"
        >
          Receive 20 loyalty points after every completed paid booking.
        </LoyaltyIcon>

        <LoyaltyIcon
          number="03"
          icon={<FaGift />}
          title="Redeem"
          points="100 points"
        >
          Use 100 points for one free ticket during seat selection.
        </LoyaltyIcon>
      </section>
      <div className="loyalty-button-container">
        <Link
          className="loyalty-button"
          to={isLoggedIn ? "/showtimes" : "/register"}
        >
          {isLoggedIn ? "Book and earn points" : "Join Movie Dome Rewards"}
        </Link>
        {isLoggedIn && (
          <Link className="loyalty-secondary-link" to="/account">
            View account
          </Link>
        )}
      </div>
    </main>
  );
}
