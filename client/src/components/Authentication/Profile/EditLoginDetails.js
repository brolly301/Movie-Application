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
    const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = Validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res= await editLoginDetails(formData);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      setUserData((current) => ({
        ...current,
        user: formData.email,
        email: formData.email,
      }));

      toast.success("Login details saved.");
      onEdit();
    } catch (error) {
      toast.error("Your login details could not be updated.");
    } finally {
      setIsSubmitting(false);
    }
  };
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
  };

  return (
    <form className="profile-edit-form" onSubmit={handleSubmit} noValidate>
      <header className="profile-section-header">
        <div>
          <h2>Edit login details</h2>
          <p>Changing your password requires your new login details.</p>
        </div>
      </header>
      <div className="profile-edit-fields">
        <div className="profile-field">
          <label htmlFor="edit-login-email">Email address</label>
          <input
            id="edit-login-email"
            name="email"
            type="email"
            value={formData.email}
            autoComplete="email"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="profile-field-error">{errors.email}</p>
          )}
        </div>
        <div className="profile-field">
          <label htmlFor="edit-login-password">New password</label>
          <input
            id="edit-login-password"
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
            <p className="profile-field-error">{errors.password}</p>
          )}
        </div>
      </div>
      <div className="profile-form-actions">
        <button
          type="submit"
          className="profile-primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </button>
        <button
          type="button"
          className="profile-secondary-button"
          disabled={isSubmitting}
          onClick={onEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
