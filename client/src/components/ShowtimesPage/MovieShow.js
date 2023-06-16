import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";

export default function MovieShow({ movie }) {
  const handleCLick = () => {
    console.log(movie.shows[0]?.startTime);
  };

  return (
    <div onClick={handleCLick} className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <h2>Rated: {movie.rated}</h2>
        <h3>Running Time: {movie.runtime}</h3>
        <h3>Date: {new Date().toDateString().substring(4)}</h3>
        <div className="movie-times-container">
          <button>{movie.shows[0]?.startTime}</button>
          <button>{movie.shows[1]?.startTime}</button>
          <button>{movie.shows[2]?.startTime}</button>
        </div>
        <Link state={{ movie: movie }} to={`/showtimes/${movie._id}`}>
          <button>More Details</button>
        </Link>
      </div>
    </div>
  );
}
