import { useState } from "react";
import { toast } from "react-toastify";
import { editUserDetails } from "../../../APIs/profile";
import useUserContext from "../../../hooks/useUserContext";
import Validation from "./ProfileDetailsValidation";

export default function EditProfileDetails({ onEdit }) {
  const { userData, setUserData } = useUserContext();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    surname: userData.surname,
    phoneNumber: userData.phoneNumber,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = Validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res= await editUserDetails(formData);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      setUserData((current) => ({
        ...current,
        ...formData,
      }));

      toast.success("Profile details saved.");
      onEdit();
    } catch (error) {
      toast.error("Your profile could not be updated.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="profile-edit-form" onSubmit={handleSubmit} noValidate>
      <header className="profile-section-header">
        <div>
          <h2>Edit profile details</h2>
          <p>Update your personal and contact information.</p>
        </div>
      </header>
      <div className="profile-edit-fields">
        <div className="profile-field">
          <label htmlFor="profile-first-name">First name</label>
          <input
            id="profile-first-name"
            name="firstName"
            type="text"
            value={formData.firstName}
            autoComplete="given-name"
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="profile-field-error">{errors.firstName}</p>
          )}
        </div>
        <div className="profile-field">
          <label htmlFor="profile-surname">Surname</label>
          <input
            id="profile-surname"
            name="surname"
            type="text"
            value={formData.surname}
            autoComplete="family-name"
            onChange={handleChange}
          />
          {errors.surname && (
            <p className="profile-field-error">{errors.surname}</p>
          )}
        </div>
        <div className="profile-field">
          <label htmlFor="profile-phone">Phone number</label>
          <input
            id="profile-phone"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            autoComplete="tel"
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <p className="profile-field-error">{errors.phoneNumber}</p>
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