import { useLocation } from "react-router-dom";
import { bookMovie } from "../../APIs/movies";

export default function SeatBooking({ movie }) {
  const handleClick = () => {
    bookMovie({
      startTime: "Now",
      startDate: "11th",
      movieID: movie._id,
    });
  };

  return (
    <div>
      Seat Bookings
      <button onClick={handleClick}>Book</button>
    </div>
  );
}
