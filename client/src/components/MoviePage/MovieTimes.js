import { Link } from "react-router-dom";
import "../../CSS/Movies/MovieTimes.css";

export default function MovieTimes({ movie, show }) {
  console.log(show);

  return (
    <div>
      <Link
        to={`/showtimes/${movie._id}/seating`}
        state={{ movie: movie, show: show }}
      >
        <button className="movie-times-button">{show.startTime}</button>
      </Link>
    </div>
  );
}
