import useUserContext from "../../../hooks/useUserContext";
import { editUserDetails } from "../../../APIs/profile";
import { toast } from "react-toastify";

export default function EditProfileDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit();
    editUserDetails(userData);
    toast.success("Profile details successfuly saved.");
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-details-container">
        <input
          onChange={handleChange}
          id="firstName"
          type="text"
          defaultValue={userData.firstName}
        />
        <input
          onChange={handleChange}
          id="surname"
          type="text"
          defaultValue={userData.surname}
        />
        <input
          onChange={handleChange}
          id="phoneNumber"
          type="text"
          defaultValue={userData.phoneNumber}
        />
        <button className="no-border" type="submit">
          Save
        </button>
        <button className="border" onClick={onEdit} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
