import useUserContext from "../../../hooks/useUserContext";
import { editUserDetails } from "../../../APIs/profile";

export default function EditProfileDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit();
    editUserDetails(userData);
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
        <button type="submit">Save</button>
        <button onClick={onEdit} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
