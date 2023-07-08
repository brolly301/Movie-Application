import { useLocation } from "react-router-dom";
import Seat from "./Seat";
import "../../CSS/Seating/SeatSelection.css";

export default function SeatSelection({ seats, setSeats }) {
  const location = useLocation();
  const show = location.state.show;

  const handleSelection = (seat, active) => {
    if (!active) {
      setSeats([...seats, seat]);
    } else {
      const updatedSeats = seats.filter((seatNumber) => {
        return seatNumber !== seat;
      });
      setSeats(updatedSeats);
    }
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

  return (
    <div className="seat-list-container">
      <div className="seat-selection-key">
        <span className="seat-selection-color" />
        <label>Available</label>
        <span className="seat-selection-color" />
        <label>Selected</label>
        <span className="seat-selection-color" />
        <label>Reserved</label>
      </div>
      <div className="seat-container">{renderedList}</div>
      <div className="seat-screen"> Screen</div>
    </div>
  );
}
