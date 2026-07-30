import { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import EditLoginDetails from "./EditLoginDetails";

export default function LoginDetails() {
  const { userData } = useUserContext();

  const [showEdit, setShowEdit] = useState(false);

   if (showEdit) {
    return <EditLoginDetails onEdit={() => setShowEdit(false)} />;
  }

   return (
    <div className="profile-details-container">
      <header className="profile-section-header">
        <div>
          <h2>Login & security</h2>
          <p>Manage the details used to access your account.</p>
        </div>
        <button
          type="button"
          className="profile-secondary-button"
          onClick={() => setShowEdit(true)}
        >
          Edit login
        </button>
      </header>
      <dl className="profile-details-list">
        <div>
          <dt>Email address</dt>
          <dd>{userData.email || "Not provided"}</dd>
        </div>
        <div>
          <dt>Password</dt>
          <dd>••••••••••••</dd>
        </div>
      </dl>
    </div>
  );
}