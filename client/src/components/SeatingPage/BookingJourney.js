import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import "../../CSS/Seating/BookingJourney.css";
import { useWindowSize } from "@uidotdev/usehooks";

export default function BookingJourney() {
  const size = useWindowSize();
  return (
    <div className="booking-journey-container">
      <ul className="booking-journey-ul">
        <li
          className={
            document.URL.includes("seating") ? "booking-journey-active" : ""
          }
        >
          {size.width < 450 ? "Seats" : "Choose Seats"}
          <GoChevronRight className="booking-journey-icon" />
        </li>
        <li
          className={
            document.URL.includes("tickets") ? "booking-journey-active" : ""
          }
        >
          {size.width < 450 ? "Tickets & Extras" : "Choose Tickets & Extras"}
          <GoChevronRight className="booking-journey-icon" />
        </li>
        <li
          className={
            document.URL.includes("confirmation")
              ? "booking-journey-active"
              : ""
          }
        >
          Confirmation
        </li>
      </ul>
    </div>
  );
}
