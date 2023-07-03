import React from "react";
import "../../CSS/ContactUs/ContactUsForm.css";

export default function ContactUsForm() {
  return (
    <div className="contact-container">
      <form className="contact-form-container">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter first name..." />
        <input type="text" placeholder="Enter a Subject" />
        <textarea
          cols="40"
          rows="20"
          placeholder="Enter your message..."></textarea>
        <button className="contact-button">Send your message</button>
      </form>
    </div>
  );
}
