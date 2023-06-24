import { Link } from "react-router-dom";

export default function MovieTimes({ movie, show }) {
  return (
    <div>
      <Link
        to={`/showtimes/${movie._id}/seating`}
        state={{ movie: movie, show: show }}
      >
        <button>{show.startTime}</button>
      </Link>
    </div>
  );
}
