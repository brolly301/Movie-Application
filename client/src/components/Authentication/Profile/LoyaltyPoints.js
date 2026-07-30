import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import "../../../CSS/Authentication/Loyalty.css";

export default function LoyaltyPoints() {
  const { userData } = useUserContext();
  const points = Number(userData.loyaltyPoints) || 0;
  const pointsRequired = 100;
  const remainingPoints = Math.max(pointsRequired - points, 0);
  const progress = Math.min((points / pointsRequired) * 100, 100);

  return (
    <div className="profile-loyalty-container">
      <header className="profile-section-header">
        <div>
          <h2>Loyalty points</h2>
          <p>Earn 20 points with every completed paid booking.</p>
        </div>
      </header>
      <div className="profile-loyalty-balance">
        <span>Current balance</span>
        <strong>{points}</strong>
        <small>points</small>
      </div>
      <div className="profile-loyalty-progress">
        <div className="profile-loyalty-progress-label">
          <span>Free ticket progress</span>
          <span>{Math.min(points, pointsRequired)} / {pointsRequired}</span>
        </div>
        <div
          className="profile-loyalty-progress-track"
          role="progressbar"
          aria-label="Progress towards a free ticket"
          aria-valuemin="0"
          aria-valuemax={pointsRequired}
          aria-valuenow={Math.min(points, pointsRequired)}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
      {remainingPoints > 0 ? (
        <p className="profile-loyalty-message">
          Earn {remainingPoints} more{" "}
          {remainingPoints === 1 ? "point" : "points"} for a free ticket.
        </p>
      ) : (
        <p className="profile-loyalty-message profile-loyalty-ready">
          You have enough points for a free ticket.
        </p>
      )}
      <Link className="profile-loyalty-button" to="/showtimes">
        {remainingPoints > 0 ? "Book and earn points" : "Use free ticket"}
      </Link>
    </div>
  );
}