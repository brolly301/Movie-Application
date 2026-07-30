import React from "react";
import SeatImage from "../../images/seat.png";
import { useState } from "react";

export default function Seat({ seat, selected, handleSelection }) {
  const className = [
    "seat-position-container",
    selected && "seat-position-container-selected",
    seat.reserved && "seat-position-container-reserved",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={className}
      disabled={seat.reserved}
      aria-pressed={selected}
      aria-label={`Seat ${seat.seatNumber}${
        seat.reserved ? ", reserved" : selected ? ", selected" : ", available"
      }`}
      onClick={() => handleSelection(seat.seatNumber)}
    >
      {seat.seatNumber}
    </button>
  );
}
