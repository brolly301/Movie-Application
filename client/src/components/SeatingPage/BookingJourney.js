import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import "../../CSS/Seating/BookingJourney.css";

export default function BookingJourney() {
  return (
    <div className="booking-journey-container">
      <ul className="booking-journey-ul">
        <li
          className={
            document.URL.includes("seating") ? "booking-journey-active" : ""
          }>
          Choose Seats <GoChevronRight className="booking-journey-icon" />
        </li>
        <li
          className={
            document.URL.includes("tickets") ? "booking-journey-active" : ""
          }>
          Choose Tickets & Extras
          <GoChevronRight className="booking-journey-icon" />
        </li>
        <li
          className={
            document.URL.includes("confirmation")
              ? "booking-journey-active"
              : ""
          }>
          Confirmation
        </li>
      </ul>
    </div>
  );
}
