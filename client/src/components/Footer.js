import React, { useState } from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { toast } from "react-toastify";
import { sendNewsletter } from "../APIs/contact";

export default function Footer() {
  const { userData } = useUserContext();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await sendNewsletter(email);
    if (res.error) toast(res.error);
    else {
      toast.success("You have successfully been added to our newsletter.");
    }
  };

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
            to={userData.user ? "/account" : "/login"}>
            <h4>Profile</h4>
          </Link>
          <Link
            className="footer-link"
            to={userData.user ? "/account" : "/login"}>
            <h4>Bookings</h4>
          </Link>
          <Link
            className="footer-link"
            to={userData.user ? "/account" : "/login"}>
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
          <form on onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="footer-input"
              type="text"
              placeholder="Enter email address..."
            />
            <button className="">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
