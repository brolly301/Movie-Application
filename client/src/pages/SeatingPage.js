import SeatBooking from "../components/SeatingPage/SeatBooking";
import SeatSelection from "../components/SeatingPage/SeatSelection";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function SeatingPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;

  const [seats, setSeats] = useState([]);

  return (
    <div>
      <SeatSelection seats={seats} setSeats={setSeats} />
      <SeatBooking seats={seats} movie={movie} show={show} />
    </div>
  );
}
