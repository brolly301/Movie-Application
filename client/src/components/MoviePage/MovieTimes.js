import { Link } from "react-router-dom";

export default function MovieTimes({ movie, show }) {
  console.log(movie);

  return (
    <div>
      <Link to={`/showtimes/${movie._id}/seating`} state={{ movie: movie }}>
        <button>{show.startTime}</button>
      </Link>
    </div>
  );
}
