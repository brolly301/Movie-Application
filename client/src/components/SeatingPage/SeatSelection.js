import { useLocation } from "react-router-dom";
import Seat from "./Seat";
import "../../CSS/Seating/SeatSelection.css";

export default function SeatSelection({ show, seats, setSeats }) {
  const handleSelection = (seatNumber) => {
    setSeats((currentSeats) => {
      if (currentSeats.includes(seatNumber)) {
        return currentSeats.filter((seat) => seat !== seatNumber);
      }

      return [...currentSeats, seatNumber];
    });
  };

  const renderedList = show.seats?.map((seat) => {
    return (
      <Seat
        key={seat.seatNumber}
        seat={seat}
        selected={seats.includes(seat.seatNumber)}
        handleSelection={handleSelection}
      />
    );
  });

  return (
    <div className="seat-list-container">
      <div className="seat-selection-key">
        <span className="seat-selection-color" />
        <span>Available</span>
        <span className="seat-selection-color" />
        <span>Selected</span>
        <span className="seat-selection-color" />
        <span>Reserved</span>
      </div>
      <div className="seat-container">{renderedList}</div>
      <div className="seat-screen"> Screen</div>
    </div>
  );
}
