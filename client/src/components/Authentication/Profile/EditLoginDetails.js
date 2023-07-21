import useUserContext from "../../../hooks/useUserContext";
import { editLoginDetails, editUserDetails } from "../../../APIs/profile";
import { toast } from "react-toastify";
import { useState } from "react";
import Validation from "./LoginDetailsValidation";

export default function EditLoginDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const [formData, setFormData] = useState({
    email: userData.email,
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const res = await editLoginDetails(formData);
    if (res.error) toast(res.error);
    else {
      onEdit();
      toast.success(res.message);
    }
  };

  const handleValidation = (e) => {
    setErrors(Validation(formData));
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-details-container">
        <h1>Edit Login Details</h1>
        {errors.email && <p>{errors.email}</p>}
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="text"
          value={userData.email}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          onChange={handleChange}
          type="password"
          name="password"
          // defaultValue="Hello"
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
