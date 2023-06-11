import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";

export default function MovieShow({ movie }) {
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <h2>Rated: {movie.rated}</h2>
        <h3>Running Time: {movie.runtime}</h3>
        <h3>Date: {new Date().toDateString().substring(4)}</h3>
        <div className="movie-times-container">
          <button>18:00pm</button>
          <button>20:15pm</button>
          <button>22:30pm</button>
        </div>
        <Link state={{ movie: movie }} to={`/showtimes/${movie._id}`}>
          <button>More Details</button>
        </Link>
      </div>
    </div>
  );
}
