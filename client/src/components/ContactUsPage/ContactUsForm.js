import React from "react";
import "../../CSS/ContactUs/ContactUsForm.css";
import { sendContactForm } from "../../APIs/contact";
import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactForm(formData);
  };

  return (
    <div className="contact-container">
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter an email address..."
        />
        <input
          onChange={handleChange}
          name="subject"
          type="text"
          placeholder="Enter a Subject..."
        />
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
