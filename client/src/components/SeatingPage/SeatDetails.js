import React from "react";
import SeatBooking from "./SeatBooking";
import "../../CSS/Seating/SeatDetails.css";

const SeatDetails = ({ seats, movie, show }) => {
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
      <div className="seat-numbers-header">
        <h2>{seats.length} Seats Selected</h2>
        <SeatBooking seats={seats} movie={movie} show={show} />
      </div>
    </div>
  );
};

export default SeatDetails;
