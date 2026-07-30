import React from "react";
import "../../CSS/ContactUs/ContactUsForm.css";
import { sendContactForm } from "../../APIs/contact";
import { useState } from "react";
import { toast } from "react-toastify";
import Validation from "./Validation";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
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
      const res = await sendContactForm(formData);
      if (res.error) {
        toast.error(res.error);
        return;
      }

      toast("Your message has been successfully sent.");
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (e) {
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <form className="contact-form-container" onSubmit={handleSubmit}>
       <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="you@example.com"
          onChange={handleChange}
        />
        {errors.email && (
          <p id="contact-email-error" className="contact-error">
            {errors.email}
          </p>
        )}
      </div>
      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          placeholder="How can we help?"
          onChange={handleChange}
        />
        {errors.subject && (
          <p id="contact-subject-error" className="contact-error">
            {errors.subject}
          </p>
        )}
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="8"
          value={formData.message}
          placeholder="Enter your message"
          onChange={handleChange}
        />
        {errors.message && (
          <p id="contact-message-error" className="contact-error">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="contact-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      </form>
  );
}
