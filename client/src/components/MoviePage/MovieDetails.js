import MovieTimesList from "./MovieTimesList";
import MovieDatesList from "../ShowtimesPage/MovieDatesList";
import "../../CSS/Movies/MovieDetails.css";

export default function MovieDetails({ movie, showBooking = false }) {
  const releaseDate = new Date(movie.released);

  const formattedReleaseDate = Number.isNaN(releaseDate.getTime())
    ? movie.released
    : new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(releaseDate);

  return (
    <div className="movie-details-main-container">
      <div className="movie-details-container">
        <img
          className="movie-details-poster"
          src={movie.poster}
          alt={`${movie.title} poster`}
        />
        <div className="movie-details-section">
          <header className="movie-details-header">
            <div>
              <span>{showBooking ? "Now showing" : "Coming soon"}</span>
              <h1>{movie.title}</h1>
            </div>
            {movie.rated && (
              <img
                className="movie-details-rating"
                src={movie.rated}
              />
            )}
          </header>
          <dl className="movie-details-meta">
            <div>
              <dt>Release date</dt>
              <dd>{formattedReleaseDate}</dd>
            </div>
            <div>
              <dt>Running time</dt>
              <dd>{movie.runtime}</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>{movie.genre}</dd>
            </div>
            <div>
              <dt>IMDb rating</dt>
              <dd>{movie.imdbRating ? `${movie.imdbRating} / 10` : "Not rated"}</dd>
            </div>
          </dl>
          <section className="movie-details-plot">
            <h2>About the film</h2>
            <p>{movie.plot}</p>
          </section>
          <dl className="movie-details-credits">
            <div>
              <dt>Director</dt>
              <dd>{movie.director}</dd>
            </div>
            <div>
              <dt>Starring</dt>
              <dd>{movie.actors}</dd>
            </div>
          </dl>
        </div>
      </div>
      {showBooking && (
        <section className="movie-booking-section">
          <header>
            <h2>Choose a showtime</h2>
            <p>Select a date and time to continue to seat selection.</p>
          </header>
          <MovieDatesList movie={movie} />
          <MovieTimesList movie={movie} />
        </section>
      )}
    </div>
  );
}