import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <h4>Socials</h4>
        <h5>Insta Logo</h5>
        <h5>Twitter Logo</h5>
        <h5>Facebook Logo</h5>
      </div>
      <div>
        <h4>Account</h4>
        <h5>Profile</h5>
        <h5>Bookings</h5>
        <h5>Loyalty</h5>
      </div>
      <div>
        <h4>Explore</h4>
        <h5>Book Movie</h5>
        <h5>Browse Offers</h5>
        <h5>Contact Us</h5>
      </div>
      <div>
        <h4>Find Out Latest Deals</h4>
        <input type="text" placeholder="Enter email address..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
