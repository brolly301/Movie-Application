import React, { useState } from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { toast } from "react-toastify";
import { sendNewsletter } from "../APIs/contact";

export default function Footer() {
  const { userData } = useUserContext();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await sendNewsletter(email);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      toast.success("You have been successfully added to the newsletter.");
      setEmail("");
    } catch {
      toast.error("Newsletter signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const accountLink = userData.user ? "/account" : "/login";

  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-brand">
          <Link className="footer-title" to="/">
            Movie Dome
          </Link>
          <p>A fictional cinema booking experience.</p>
        </div>
        <nav className="footer-navigation" aria-label="Footer navigation">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/showtimes">What’s on</Link>
            <Link to="/comingSoon">Coming soon</Link>
            <Link to="/prices">Prices</Link>
            <Link to="/specialOffers">Offers</Link>
          </div>
          <div className="footer-column">
            <h3>Account</h3>
            <Link to={accountLink}>Profile</Link>
            <Link to={accountLink}>Bookings</Link>
            <Link to="/loyalty">Loyalty</Link>
            <Link to="/contactUs">Contact</Link>
          </div>
        </nav>
        <div className="footer-subscribe">
          <h3>Newsletter</h3>
          <p>Occasional updates about new films and offers.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email">Email address</label>
            <div className="footer-form-row">
              <input
                id="newsletter-email"
                className="footer-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Joining…" : "Join"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Movie Dome</p>
        <p>Portfolio project</p>
      </div>
    </footer>
  );
}
