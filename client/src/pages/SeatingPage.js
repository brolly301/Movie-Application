import SeatBooking from "../components/SeatingPage/SeatBooking";
import SeatSelection from "../components/SeatingPage/SeatSelection";
import { useLocation } from "react-router-dom";

export default function SeatingPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;

  console.log(show);

  return (
    <div>
      <SeatSelection />
      <SeatBooking movie={movie} show={show} />
    </div>
  );
}
