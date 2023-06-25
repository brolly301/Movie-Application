import "../../CSS/Movies/MovieDetails.css";
import MovieTimesList from "./MovieTimesList";
import MovieDatesList from "../ShowtimesPage/MovieDatesList";

export default function MovieDetails({ movie }) {
  return (
    <div className="movie-details-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-details-section">
        <h1>{movie.title}</h1>
        <h2>{movie.rated}</h2>
        <h2>{movie.runtime}</h2>
        <label>Description:</label>
        <p>{movie.plot}</p>
        <label htmlFor="">Starring:</label>
        <p>{movie.actors}</p>
        <label htmlFor="">Director</label>
        <p>{movie.director}</p>
        <label htmlFor="">Genres</label>
        <p>{movie.genre}</p>
        <div>
          <MovieDatesList />
        </div>
        <div>
          <MovieTimesList movie={movie} />
        </div>
      </div>
    </div>
  );
}
