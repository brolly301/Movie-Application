import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../APIs/authentication";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Validation";
import "../../../CSS/Authentication/LoginForm.css";

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
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = Validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await register(formData);

      if (res.error) {
        setServerError(res.error);
        return;
      }

      toast.success("Account created. You can now log in.");
      navigate("/login");
    } catch (error) {
      setServerError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card auth-card-wide">
        <header className="auth-header">
          <h1>Create account</h1>
          <p>Register to manage bookings and collect loyalty points.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {serverError && (
            <p className="auth-form-error" role="alert">
              {serverError}
            </p>
          )}
          <div className="auth-field-row">
            <div className="auth-field">
              <label htmlFor="register-first-name">First name</label>
              <input
                id="register-first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                autoComplete="given-name"
                aria-invalid={Boolean(errors.firstName)}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="auth-field-error">{errors.firstName}</p>
              )}
            </div>
            <div className="auth-field">
              <label htmlFor="register-surname">Surname</label>
              <input
                id="register-surname"
                name="surname"
                type="text"
                value={formData.surname}
                autoComplete="family-name"
                onChange={handleChange}
              />
              {errors.surname && (
                <p className="auth-field-error">{errors.surname}</p>
              )}
            </div>
          </div>
          <div className="auth-field">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              name="email"
              type="email"
              value={formData.email}
              autoComplete="email"
              placeholder="you@example.com"
              onChange={handleChange}
            />
            {errors.email && <p className="auth-field-error">{errors.email}</p>}
          </div>

          <div className="auth-field">
            <label htmlFor="register-phone">Phone number</label>
            <input
              id="register-phone"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              autoComplete="tel"
              placeholder="07123 456789"
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="auth-field-error">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="auth-field">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              name="password"
              type="password"
              value={formData.password}
              autoComplete="new-password"
              onChange={handleChange}
            />
            <span className="auth-field-hint">
              Use 8–20 characters with an uppercase letter, number and symbol.
            </span>
            {errors.password && (
              <p className="auth-field-error">{errors.password}</p>
            )}
          </div>
          <div className="auth-field">
            <label htmlFor="register-confirm-password">Confirm password</label>
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              autoComplete="new-password"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="auth-field-error">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="auth-primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>
        <div className="auth-switch">
          <span>Already have an account?</span>
          <Link to="/login">Log in</Link>
        </div>
      </section>
    </main>
  );
}
