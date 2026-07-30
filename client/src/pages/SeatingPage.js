import SeatSelection from "../components/SeatingPage/SeatSelection";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import "../CSS/Seating/SeatPanel.css";
import { Navigate } from "react-router-dom";

export default function SeatingPage() {
  const location = useLocation();
  const { movie, show } = location.state ?? {};

  const [seats, setSeats] = useState([]);

  if (!movie || !show) {
    return <Navigate to="/showtimes" replace />;
  }

  return (
    <main className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <SeatSelection show={show} seats={seats} setSeats={setSeats} />
        <SeatDetails seats={seats} movie={movie} show={show} />
      </div>
    </main>
  );
}
