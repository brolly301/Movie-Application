import { useLocation } from "react-router-dom";
import Seat from "./Seat";
import "../../CSS/Seating/SeatSelection.css";
import { useState } from "react";

export default function SeatSelection() {
  const [seats, setSeats] = useState([]);

  const location = useLocation();
  const show = location.state.show;

  //If active & push if not then pop

  const handleSelection = (seat) => {
    setSeats([...seats, seat]);
    console.log(seats);
  };

  const renderedList = show.seats?.map((seat) => {
    return (
      <Seat
        handleSelection={handleSelection}
        seat={seat}
        key={seat.seatNumber}
      />
    );
  });

  return <div className="seat-container">{renderedList}</div>;
}
