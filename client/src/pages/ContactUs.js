import React from "react";
import ContactUsForm from "../components/ContactUsPage/ContactUsForm";

export default function ContactUs() {
  return (
    <main className="contact-page">
      <header className="contact-page-header">
        <h1>Contact us</h1>
        <p>Questions about a booking or your account? Send us a message.</p>
      </header>
      <div className="contact-page-content">
        <section className="contact-intro">
          <span>Customer support</span>
          <h2>How can we help?</h2>
          <p>
            Include as much detail as possible and we’ll get back to you using
            the email address provided.
          </p>
          <div className="contact-help-item">
            <strong>Existing booking?</strong>
            <p>Include your booking reference in the subject or message.</p>
          </div>
          <div className="contact-help-item">
            <strong>Account issue?</strong>
            <p>Use the same email address associated with your account.</p>
          </div>
        </section>
        <ContactUsForm />
      </div>
    </main>
  );
}
