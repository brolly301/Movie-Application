import useUserContext from "../../../hooks/useUserContext";
import "../../../CSS/Authentication/Loyalty.css";

export default function LoyaltyPoints() {
  const { userData } = useUserContext();

  return (
    <div className="profile-loyalty-container">
      <h1>Loyalty Points</h1>
      <h1 className="profile-loyalty-points">{userData.loyaltyPoints || 0}</h1>
      <h4>Want more loyalty points? Book below.</h4>
      <button className="no-border">Book Movies</button>
      <button className="border">
        You have enough for a free movie! Book now.
      </button>
    </div>
  );
}
