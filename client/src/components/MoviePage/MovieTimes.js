import { Link } from "react-router-dom";

export default function MovieTimes({ movie }) {
  return (
    <div>
      <Link to={`/showtimes/${movie._id}/seating`} state={{ movie: movie }}>
        <button>Book</button>
      </Link>
    </div>
  );
}
