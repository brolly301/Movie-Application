import useUserContext from "../../../hooks/useUserContext";
import { editUserDetails } from "../../../APIs/profile";
import { toast } from "react-toastify";
import { useState } from "react";
import Validation from "./ProfileDetailsValidation";

export default function EditProfileDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const res = await editUserDetails(userData);
    if (res.error) console.log(res.error);
    else {
      onEdit();
      toast.success("Profile details successfuly saved.");
    }
  };

  const handleValidation = (e) => {
    setErrors(Validation(userData));
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
        <h1>Edit Profile Details</h1>

        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          onChange={handleChange}
          id="firstName"
          type="text"
          defaultValue={userData.firstName}
        />
        {errors.surname && <p>{errors.surname}</p>}
        <input
          onChange={handleChange}
          id="surname"
          type="text"
          defaultValue={userData.surname}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
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
