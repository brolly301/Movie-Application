import React from "react";
import SeatImage from "../../images/seat.png";
import { useState } from "react";

export default function Seat({ seat }) {
  const [seats, setSeats] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setSeats([e.target.id]);
    setIsActive(!isActive);
  };

  console.log(seats);

  //Similar to set expanded index for

  return (
    <div>
      <img
        onClick={handleClick}
        className={isActive ? "selected-seat" : "seat-position-container"}
        id={seat.seatNumber}
        src={SeatImage}
        alt=""
      />
    </div>
  );
}
