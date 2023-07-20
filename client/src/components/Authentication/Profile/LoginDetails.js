import { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import EditLoginDetails from "./EditLoginDetails";

export default function LoginDetails() {
  const { userData } = useUserContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="profile-details-container">
      <h1>Login Details</h1>
      <input readOnly type="text" defaultValue={userData.email} />
      <input readOnly type="password" placeholder="***********" />
      <button onClick={handleEdit} className="no-border">
        Edit
      </button>
    </div>
  );

  if (showEdit) {
    content = <EditLoginDetails onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}
