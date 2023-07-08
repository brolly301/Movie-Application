import "../../CSS/Movies/MovieDetails.css";
import MovieTimesList from "./MovieTimesList";
import MovieDatesList from "../ShowtimesPage/MovieDatesList";

export default function MovieDetails({ movie }) {
  return (
    <div>
      <div>
        <MovieDatesList />
      </div>
      <div>
        <MovieTimesList movie={movie} />
      </div>
      <div className="movie-details-container">
        <img className="movie-poster" src={movie.poster} alt="" />
        <div className="movie-details-section">
          <h1>{movie.title}</h1>
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
    </div>
  );
}
