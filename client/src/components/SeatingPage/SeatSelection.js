import { useLocation } from "react-router-dom";
import Seat from "./Seat";
import "../../CSS/Seating/SeatSelection.css";
import { useState } from "react";

export default function SeatSelection() {
  const [seats, setSeats] = useState([]);

  const location = useLocation();
  const show = location.state.show;

  const handleClick = (e) => {};

  const renderedList = show.seats?.map((seat) => {
    return <Seat seat={seat} key={seat.seatNumber} alt="" />;
  });

  return <div className="seat-container">{renderedList}</div>;
}
