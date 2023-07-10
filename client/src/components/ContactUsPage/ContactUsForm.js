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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    setErrors(Validation(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    const res = sendContactForm(formData);
    if (res.error) toast(res.error);
    else {
      toast(res.message);
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        {errors.email && <p>{errors.email}</p>}
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter an email address..."
        />
        {errors.subject && <p>{errors.subject}</p>}
        <input
          onChange={handleChange}
          name="subject"
          type="text"
          placeholder="Enter a Subject..."
        />
        {errors.message && <p>{errors.message}</p>}
        <textarea
          onChange={handleChange}
          name="message"
          cols="40"
          rows="20"
          placeholder="Enter your message..."
        ></textarea>
        <button className="contact-button">Send your message</button>
      </form>
    </div>
  );
}
