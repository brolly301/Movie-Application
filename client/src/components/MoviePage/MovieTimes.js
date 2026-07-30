import { Link } from "react-router-dom";
import "../../CSS/Movies/MovieTimes.css";

export default function MovieTimes({ movie, show }) {
  return (
    <Link
      className="movie-times-button"
      to={`/showtimes/${movie._id}/seating`}
      state={{ movie, show }}
    >
      {show.startTime}
    </Link>
  );
}
