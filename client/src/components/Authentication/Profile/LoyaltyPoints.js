import useUserContext from "../../../hooks/useUserContext";
import "../../../CSS/Authentication/Loyalty.css";
import { Link } from "react-router-dom";

export default function LoyaltyPoints() {
  const { userData } = useUserContext();

  return (
    <div className="profile-loyalty-container">
      <h1>Loyalty Points</h1>
      <h1 className="profile-loyalty-points">{userData.loyaltyPoints || 0}</h1>
      <h4>Want more loyalty points? Book below.</h4>
      <Link to={"/showtimes"}>
        <button className="no-border">Book Movies</button>
      </Link>
      {userData.loyaltyPoints >= 100 ? (
        <Link to={"/showtimes"}>
          <button className="border">
            You have enough for a free movie! Book now.
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
