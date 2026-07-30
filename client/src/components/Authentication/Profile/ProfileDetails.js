import { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import EditProfileDetails from "./EditProfileDetails";
import "../../../CSS/Authentication/ProfileDetails.css";

export default function ProfileDetails() {
  const { userData } = useUserContext();
  const [showEdit, setShowEdit] = useState(false);

  if (showEdit) {
    return <EditProfileDetails onEdit={() => setShowEdit(false)} />;
  }

  return (
    <div className="profile-details-container">
      <header className="profile-section-header">
        <div>
          <h2>Profile details</h2>
          <p>Your personal and contact information.</p>
        </div>
        <button
          type="button"
          className="profile-secondary-button"
          onClick={() => setShowEdit(true)}
        >
          Edit details
        </button>
      </header>
      <dl className="profile-details-list">
        <div>
          <dt>First name</dt>
          <dd>{userData.firstName || "Not provided"}</dd>
        </div>
        <div>
          <dt>Surname</dt>
          <dd>{userData.surname || "Not provided"}</dd>
        </div>
        <div>
          <dt>Email address</dt>
          <dd>{userData.email || "Not provided"}</dd>
        </div>
        <div>
          <dt>Phone number</dt>
          <dd>{userData.phoneNumber || "Not provided"}</dd>
        </div>
      </dl>
    </div>
  );
}