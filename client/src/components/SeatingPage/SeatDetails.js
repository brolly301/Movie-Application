import React from "react";
import { useLocation } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import "../../CSS/Seating/SeatDetails.css";

const SeatDetails = ({ seats, movie, show, tickets = [], extras = [] }) => {
  const { pathname } = useLocation();
  const isTicketPage = pathname.includes("/tickets");

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(show.date));

  const ticketTotal = tickets.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0,
  );

  const extrasTotal = extras.reduce(
    (total, extra) => total + extra.price * extra.quantity,
    0,
  );

  const bookingTotal = ticketTotal + extrasTotal;

  return (
    <div className="seat-details-container">
      <h1>{movie.title}</h1>
      <p className="seat-details-cinema">Movie Dome</p>
      <p className="seat-details-show">
        {formattedDate} · {show.startTime}
      </p>
      <hr />
      <div className="seat-numbers-container">
        <h2>Seats</h2>
        <h2 className="seat-numbers">
          {seats.length > 0 ? seats.join(", ") : "No seats selected"}
        </h2>
      </div>
      <hr />
      {isTicketPage ? (
        <>
          <div className="seat-numbers-container">
            <h2>Tickets</h2>
            <h2 style={{ margintop: 0 }}>
              {tickets.length > 0
                ? tickets.map((ticket) => {
                    return (
                      <div>
                        <p className="ticket-seat-details-p">
                          {ticket.quantity}X {ticket.product}
                        </p>
                      </div>
                    );
                  })
                : "No tickets selected."}
            </h2>
          </div>
          <hr />
          <div className="seat-numbers-container">
            <h2>Extras</h2>
            <h2 style={{ margintop: 0 }}>
              {extras.length > 0
                ? extras.map((extra) => {
                    return (
                      <p className="ticket-seat-details-p">
                        {extra.quantity} X {extra.product}
                      </p>
                    );
                  })
                : "No extras selected."}
            </h2>
          </div>
          <hr />

          <div className="booking-total">
            <span>Total</span>
            <strong>£{bookingTotal.toFixed(2)}</strong>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="seat-numbers-header">
        <h2>
          {" "}
          {seats.length} {seats.length === 1 ? "seat" : "seats"} selected
        </h2>
        <SeatBooking
          extras={extras}
          tickets={tickets}
          seats={seats}
          movie={movie}
          show={show}
        />
      </div>
    </div>
  );
};

export default SeatDetails;
