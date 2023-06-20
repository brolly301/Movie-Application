import { useState } from "react";
import { register } from "../../../APIs/authentication";
import "../../../CSS/Authentication/RegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>First Name</label>
        <input name="firstName" onChange={handleChange} type="text" />
        <label>Surname</label>
        <input name="surname" onChange={handleChange} type="text" />
        <label>Email</label>
        <input name="email" onChange={handleChange} type="text" />
        <label>Phone Number</label>
        <input name="phoneNumber" onChange={handleChange} type="text" />
        <label>Password</label>
        <input name="password" onChange={handleChange} type="text" />
        <label>Confirm Password</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
