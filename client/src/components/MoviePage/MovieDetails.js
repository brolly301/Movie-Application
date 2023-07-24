import "../../CSS/Movies/MovieDetails.css";
import MovieTimesList from "./MovieTimesList";
import MovieDatesList from "../ShowtimesPage/MovieDatesList";

export default function MovieDetails({ movie, link }) {
  let movie_dates;
  if (link === "now-showing") {
    movie_dates = <MovieDatesList />;
  }

  return (
    <div className="movie-details-main-container">
      <div className="movie-details-container">
        <div className="movie-column-container">
          <h1 className="movie-hidden-title">{movie.title}</h1>
          <img className="movie-details-poster" src={movie.poster} alt="" />
        </div>
        <div className="movie-details-section">
          <h1 className="movie-shown-title">{movie.title}</h1>
          <div>
            <div className="movie-details-column-1">
              <label>Running Time:</label>
              <h3>{movie.runtime}</h3>
              <label>Starring:</label>
              <h3>{movie.actors}</h3>
            </div>
            <div className="movie-details-column-2">
              <label>Genre:</label>
              <h3>{movie.genre}</h3>
              <label>Director:</label>
              <h3>{movie.director}</h3>
            </div>
          </div>
          <label className="movie-details-description-label">
            Description:
          </label>
          <p className="movie-details-description-p">{movie.plot}</p>
        </div>
      </div>
      <div className="movie-date-time-container">
        {movie_dates}

        <MovieTimesList movie={movie} />
      </div>
    </div>
  );
}
