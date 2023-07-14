import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Footer() {
  const { userData } = useUserContext();

  return (
    <div className="footer-main">
      <hr></hr>

      <div className="footer-container">
        <div>
          <h3>Socials</h3>
          <h4>Twitter</h4>
          <h4>Instagram</h4>
          <h4>Facebook</h4>
        </div>
        <div>
          <h3>Account</h3>
          <Link
            className="footer-link"
            to={userData.user ? "/account" : "/login"}
          >
            <h4>Profile</h4>
          </Link>
          <Link
            className="footer-link"
            to={userData.user ? "/account" : "/login"}
          >
            <h4>Bookings</h4>
          </Link>
          <Link
            className="footer-link"
            to={userData.user ? "/account" : "/login"}
          >
            <h4>Loyalty</h4>
          </Link>
        </div>
        <div>
          <h3>Explore</h3>
          <Link className="footer-link" to={"/showtimes"}>
            <h4>Book Movie</h4>
          </Link>
          <Link className="footer-link" to={"/specialOffers"}>
            <h4>Browse Offers</h4>
          </Link>
          <Link className="footer-link" to={"/contactUs"}>
            <h4>Contact Us</h4>
          </Link>
        </div>
        <div className="footer-subscribe">
          <h3>Find Out Latest Deals</h3>
          <input
            className="footer-input"
            type="text"
            placeholder="Enter email address..."
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
