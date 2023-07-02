import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import LoginDetails from "./LoginDetails";
import BookingDetailsShow from "./BookingDetailsShow";
import LoyaltyPoints from "./LoyaltyPoints";
import "../../../CSS/Authentication/ProfileNav.css";
import BookingDetailsList from "./BookingDetailsList";

export default function ProfileNavigate() {
  const [content, setContent] = useState(<LoginDetails />);

  const handleClick = (e) => {
    setContent(<ProfileDetails />);
  };
  const handleClick1 = (e) => {
    setContent(<LoginDetails />);
  };
  const handleClick2 = (e) => {
    setContent(<BookingDetailsList />);
  };
  const handleClick3 = (e) => {
    setContent(<LoyaltyPoints />);
  };

  return (
    <div className="profile-container">
      <div className="profile-nav-container">
        <button onClick={handleClick}>Profile</button>
        <button onClick={handleClick1}>Login</button>
        <button onClick={handleClick2}>Bookings</button>
        <button onClick={handleClick3}>Loyalty</button>
      </div>
      <div className="profile-content">{content}</div>
    </div>
  );
}
