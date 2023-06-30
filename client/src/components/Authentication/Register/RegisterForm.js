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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <h3>Please enter your details below to register</h3>
      <form onSubmit={handleSubmit} className="register-form-container">
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="First Name..."
        />
        <input
          name="surname"
          onChange={handleChange}
          type="text"
          placeholder="Surname..."
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email Address..."
        />
        <input
          name="phoneNumber"
          onChange={handleChange}
          type="text"
          placeholder="Phone Number..."
        />
        <input
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="Password..."
        />
        <input type="text" placeholder="Confirm Password..." />
        <button>Register</button>
        <button>Have an account? Login here.</button>
      </form>
    </div>
  );
}
