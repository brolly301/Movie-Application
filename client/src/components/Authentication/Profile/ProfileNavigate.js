import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import LoginDetails from "./LoginDetails";
import BookingDetails from "./BookingDetails";
import LoyaltyPoints from "./LoyaltyPoints";
import "../../../CSS/Authentication/ProfileNav.css";

export default function ProfileNavigate() {
  const [content, setContent] = useState(<LoginDetails />);

  const handleClick = (e) => {
    setContent(<ProfileDetails />);
  };
  const handleClick1 = (e) => {
    setContent(<LoginDetails />);
  };
  const handleClick2 = (e) => {
    setContent(<BookingDetails />);
  };
  const handleClick3 = (e) => {
    setContent(<LoyaltyPoints />);
  };

  return (
    <div className="profile-container">
      <div className="profile-nav-container">
        <h3 onClick={handleClick}>Profile</h3>
        <h3 onClick={handleClick1}>Login</h3>
        <h3 onClick={handleClick2}>Bookings</h3>
        <h3 onClick={handleClick3}>Loyalty</h3>
      </div>
      <div className="profile-content">{content}</div>
    </div>
  );
}
