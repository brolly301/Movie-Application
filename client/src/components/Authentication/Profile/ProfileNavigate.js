import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import LoginDetails from "./LoginDetails";
import LoyaltyPoints from "./LoyaltyPoints";
import "../../../CSS/Authentication/ProfileNav.css";
import BookingDetailsList from "./BookingDetailsList";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "login", label: "Login & security" },
  { id: "bookings", label: "Bookings" },
  { id: "loyalty", label: "Loyalty" },
];

export default function ProfileNavigate() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "login":
        return <LoginDetails />;
      case "bookings":
        return <BookingDetailsList />;
      case "loyalty":
        return <LoyaltyPoints />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <main className="profile-container">
      <header className="profile-header">
        <h1>Your account</h1>
        <p>Manage your details, bookings and Movie Dome rewards.</p>
      </header>
      <div className="profile-layout">
        <nav className="profile-nav-container" aria-label="Account sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? "profile-nav-active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <section className="profile-content">{renderContent()}</section>
      </div>
    </main>
  );
}
