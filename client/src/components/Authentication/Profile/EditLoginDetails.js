import useUserContext from "../../../hooks/useUserContext";
import { editLoginDetails, editUserDetails } from "../../../APIs/profile";
import { toast } from "react-toastify";
import { useState } from "react";
import Validation from "./ProfileDetailsValidation";

export default function EditLoginDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    const res = await editLoginDetails();
    if (res.error) toast(res.error);
    else {
      onEdit();
      toast.success(res.message);
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
        <h1>Edit Login Details</h1>
        {/* {errors.firstName && <p>{errors.firstName}</p>} */}
        <input
          onChange={handleChange}
          id="email"
          type="text"
          defaultValue={userData.email}
        />
        {/* {errors.surname && <p>{errors.surname}</p>} */}
        {/* <input
          onChange={handleChange}
          id="password"
          type="password"
          defaultValue="Hello"
        /> */}
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
