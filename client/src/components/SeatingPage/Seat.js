import React from "react";
import SeatImage from "../../images/seat.png";
import { useState } from "react";

export default function Seat({ seat, handleSelection }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    if (!seat.reserved) {
      handleSelection(e.target.id, isActive);
      setIsActive(!isActive);
    }
  };

  //Similar to set expanded index for

  return (
    <div
      onClick={handleClick}
      className={
        "seat-position-container" +
        (isActive ? "-selected " : "") +
        (seat.reserved ? "-reserved" : "")
      }
      id={seat.seatNumber}
      src={SeatImage}
    >
      {seat.seatNumber}
    </div>
  );
}
