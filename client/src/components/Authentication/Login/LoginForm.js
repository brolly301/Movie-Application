import { useState } from "react";
import { login } from "../../../APIs/authentication";
import useUserContext from "../../../hooks/useUserContext";
import { Link } from "react-router-dom";
import "../../../CSS/Authentication/LoginForm.css";

export default function LoginForm() {
  const { setUserData } = useUserContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    setUserData({ user: formData.email });
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <h3>Please enter your login details to continue.</h3>
      <form className="login-form-main" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email Address..."
        />
        <input
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Password..."
        />
        <button className="no-border">Login</button>
        <div>Or</div>
        <Link className="login-link" to="/register">
          <button className="border" type="button">
            Register
          </button>
        </Link>
      </form>
    </div>
  );
}
