import SeatBooking from "../components/SeatingPage/SeatBooking";
import SeatSelection from "../components/SeatingPage/SeatSelection";
import { useLocation } from "react-router-dom";

export default function SeatingPage() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <SeatSelection />
      <SeatBooking movie={movie} />
    </div>
  );
}
