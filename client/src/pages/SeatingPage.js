import SeatSelection from "../components/SeatingPage/SeatSelection";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import "../CSS/Seating/SeatPanel.css";

export default function SeatingPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;

  const [seats, setSeats] = useState([]);

  return (
    <div className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <SeatSelection seats={seats} setSeats={setSeats} />
        <SeatDetails seats={seats} movie={movie} show={show} />
      </div>
    </div>
  );
}
