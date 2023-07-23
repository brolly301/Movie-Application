import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../APIs/authentication";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Validation";
import "../../../CSS/Authentication/RegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const redirect = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    setErrors(Validation(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const res = await register(formData);
    if (res.error) console.log(res.error);
    else {
      toast.success(res.message);
      redirect("/");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <h3>Please enter your details below to register</h3>
      <form onSubmit={handleSubmit} className="register-form-container">
        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="First Name..."
        />
        {errors.surname && <p>{errors.surname}</p>}
        <input
          name="surname"
          onChange={handleChange}
          type="text"
          placeholder="Surname..."
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email Address..."
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        <input
          name="phoneNumber"
          onChange={handleChange}
          type="text"
          placeholder="Phone Number..."
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password..."
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <input
          name="confirmPassword"
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password..."
        />
        <button className="no-border">Register</button>
        <Link style={{ textDecoration: "none" }} to={"/login"}>
          <button type="button" className="border">
            Have an account? Login here.
          </button>
        </Link>
      </form>
    </div>
  );
}
