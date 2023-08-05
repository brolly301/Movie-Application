import React from "react";
import SeatBooking from "./SeatBooking";
import "../../CSS/Seating/SeatDetails.css";

const SeatDetails = ({ seats, movie, show, tickets, extras }) => {
  return (
    <div className="seat-details-container">
      <h1>{movie.title}</h1>
      <h2>Movie Dome - Screen {Math.floor(Math.random() * 10) + 1}</h2>
      <h2>
        {show.date.substring(0, 10)} | {show.startTime}
      </h2>

      <hr />
      <div className="seat-numbers-container">
        <h2>Seats</h2>
        <h2 className="seat-numbers">
          {seats.length > 0
            ? seats.map((seat) => `${seat} `)
            : "No seats selected."}
        </h2>
      </div>
      <hr />
      {document.URL.includes("tickets") ? (
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
                      <div>
                        <p className="ticket-seat-details-p">
                          {extra.quantity}X {extra.product}
                        </p>
                      </div>
                    );
                  })
                : "No extras selected."}
            </h2>
          </div>
          <hr />
        </>
      ) : (
        ""
      )}

      <div className="seat-numbers-header">
        <h2>{seats.length} Seats Selected</h2>
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
