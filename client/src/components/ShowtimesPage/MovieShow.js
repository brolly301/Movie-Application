import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";
import MovieTimes from "../MoviePage/MovieTimes";

export default function MovieShow({ movie, link }) {
  const renderedList = movie.shows?.map((show) => {
    return <MovieTimes show={show} movie={movie} />;
  });

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <h2>Rated: {movie.rated}</h2>
        <h3>Running Time: {movie.runtime}</h3>
        <h3>Date: {new Date().toDateString().substring(4)}</h3>
        {/* Time will go here */}
        <Link state={{ movie: movie }} to={`/${link}/${movie._id}`}>
          <button>More Details</button>
        </Link>
        <div className="movie-times-list">{renderedList}</div>
      </div>
    </div>
  );
}
