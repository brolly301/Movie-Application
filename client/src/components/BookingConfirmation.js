import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Seating/BookingConfirmation.css";

export default function BookingConfirmation() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="booking-confirmation-container">
      <h1 className="booking-confirmation-heading">
        Ticket Booking Confirmation
      </h1>
      <p className="booking-confirmation-subheading">
        Thank you for choosing MovieDOME for your movie night! We are delighted
        to confirm your booking details. Your love for movies is about to be
        rewarded with an incredible cinematic experience.
      </p>
      <div className="booking-confirmation-content-container">
        <h2 className="booking-confrimation-content-header">Booking Details</h2>
        <hr />
        <div className="booking-confirmation-date-id">
          <span>Thursday, 27th July 2023 - 17.45pm</span>
          <span>Id: Basdf32324352</span>
        </div>
        <hr />
        <div className="booking-confirmation-content-subcontainer">
          <img
            className="booking-confirmation-content-poster"
            src={movie.poster}
            alt=""
          />
          <div className="booking-confrmation-content-row1">
            <div className="booking-confirmation-row-content">
              <label>Movie:</label>
              <p>{movie.title}</p>
            </div>
            <div className="booking-confirmation-row-content">
              <label>Seats:</label>
              <p>A1 B3 B2</p>
            </div>
            <div className="booking-confirmation-row-content">
              <label>Screen:</label>
              <p>1</p>
            </div>
          </div>
          <div className="booking-confrmation-content-row2">
            <div className="booking-confirmation-row-content">
              <label>Ticket Type:</label>
              <p>2x Standard</p>
            </div>
            <div className="booking-confirmation-row-content">
              <label>Price:</label>
              <p>£23.00</p>
            </div>
            <div className="booking-confirmation-row-content">
              <label>Extras:</label>
              <div className="booking-confirmation-extras">
                <p>1x Regular Drink</p>
                <p>1x Regular Popcron</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="booking-content-subheadings">Booking Instructions</h4>
      <p className="booking-content-p">
        Please arrive at the cinema hall at least 15 minutes before the showtime
        to avoid any inconvenience. In case of any changes or cancellations,
        please contact our customer support at [Customer Support Contact
        Details] at least 2 hours before the showtime. Your booking is
        non-transferable and non-refundable within 2 hours of the showtime. We
        recommend that you keep this confirmation handy on your mobile device or
        print a copy to present at the cinema counter.
      </p>
      <h4 className="booking-content-subheadings">Enjoy the Show!</h4>
      <p className="booking-content-p">
        We hope you have an amazing time watching {movie.title} at our cinema.
        If you have any questions or need further assistance, feel free to reach
        out to us anytime. Thank you for choosing MovieDome. We look forward to
        serving you again!
      </p>
      <Link to={"/"} className="booking-confirmation-link">
        <button className="booking-confirmation-button">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
