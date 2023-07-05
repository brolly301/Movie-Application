import React from "react";
import SeatImage from "../../images/seat.png";
import { useState } from "react";

export default function Seat({ seat, handleSelection }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    handleSelection(e.target.id, isActive);
    setIsActive(!isActive);
  };

  //Similar to set expanded index for

  return (
    <div
      onClick={handleClick}
      className={isActive ? "selected-seat" : "seat-position-container"}
      id={seat.seatNumber}
      src={SeatImage}>
      {seat.seatNumber}
    </div>
  );
}
