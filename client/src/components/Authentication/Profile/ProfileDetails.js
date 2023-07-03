import useUserContext from "../../../hooks/useUserContext";
import EditProfileDetails from "./EditProfileDetails";
import "../../../CSS/Authentication/ProfileDetails.css";
import { useState } from "react";

export default function ProfileDetails() {
  const { userData } = useUserContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="profile-details-container">
      <h1>Profile Details</h1>
      <input type="text" value={userData.firstName} readOnly />
      <input type="text" value={userData.surname} readOnly />
      <input type="text" value={userData.email} readOnly />
      <input type="text" value={userData.phoneNumber} readOnly />
      <button className="no-border" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );

  if (showEdit) {
    content = <EditProfileDetails onEdit={handleEdit} />;
  }

  return <div> {content}</div>;
}
