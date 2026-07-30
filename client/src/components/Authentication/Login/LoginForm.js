import { useState } from "react";
import { login } from "../../../APIs/authentication";
import useUserContext from "../../../hooks/useUserContext";
import { Link } from "react-router-dom";
import "../../../CSS/Authentication/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const { setUserData } = useUserContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password) {
      setError("Enter your email address and password.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await login(formData);

      if (res.error) {
        setError(res.error);
        return;
      }

      setUserData((current) => ({
        ...current,
        user: formData.email,
        email: formData.email,
      }));

      toast.success(res.message || "Welcome back.");
      navigate("/");
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <header className="auth-header">
          <span>Welcome back</span>
          <h1>Log in</h1>
          <p>Enter your account details to continue.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit}>
          {error && (
            <p className="auth-form-error" role="alert">
              {error}
            </p>
          )}
          <div className="auth-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              value={formData.email}
              autoComplete="email"
              placeholder="you@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="auth-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              value={formData.password}
              autoComplete="current-password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="auth-primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </form>
        <div className="auth-switch">
          <span>New to Movie Dome?</span>
          <Link to="/register">Create an account</Link>
        </div>
      </section>
    </main>
  );
}
