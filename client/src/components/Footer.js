import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <h3>Socials</h3>
        <h4>Twitter</h4>
        <h4>Instagram</h4>
        <h4>Facebook</h4>
      </div>
      <div>
        <h3>Account</h3>
        <h4>Profile</h4>
        <h4>Bookings</h4>
        <h4>Loyalty</h4>
      </div>
      <div>
        <h3>Explore</h3>
        <h4>Book Movie</h4>
        <h4>Browse Offers</h4>
        <h4>Contact Us</h4>
      </div>
      <div className="footer-subscribe">
        <h3>Find Out Latest Deals</h3>
        <input type="text" placeholder="Enter email address..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
