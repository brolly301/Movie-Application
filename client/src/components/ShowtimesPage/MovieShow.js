import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";
import MovieTimes from "../MoviePage/MovieTimes";
import useMovieContext from "../../hooks/useMovieContext";

export default function MovieShow({ movie, link }) {
  const { date } = useMovieContext();

  const showsForDate = movie.shows.filter((show) => show.date === date);
  const firstActor = movie.actors.split(",")[0].trim();
  const firstGenre = movie.genre.split(",")[0].trim();
  const firstDirector = movie.director.split(",")[0].trim();

  return (
    <article className="movie-container">
      <img
        className="movie-poster"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <div className="movie-details">
        <header className="movie-title">
          <h2>{movie.title}</h2>
          <img
            className="movie-rating-icon"
            src={movie.rated}
            alt={`${movie.title} age rating`}
          />
        </header>
        <dl className="movie-meta">
          <div>
            <dt>Running time</dt>
            <dd>{movie.runtime}</dd>
          </div>
          <div>
            <dt>Genre</dt>
            <dd>{firstGenre}</dd>
          </div>
          <div>
            <dt>Starring</dt>
            <dd>{firstActor}</dd>
          </div>
          <div>
            <dt>Director</dt>
            <dd>{firstDirector}</dd>
          </div>
        </dl>
        <Link
          className="movie-show-button"
          state={{ movie }}
          to={`/${link}/${movie._id}`}
        >
          More details
        </Link>
      </div>
      <section className="movie-showtimes-container">
        <h2 className="showtimes-title">Showtimes</h2>
        <div className="movie-showtimes">
          {showsForDate.map((show) => (
            <MovieTimes key={show._id} show={show} movie={movie} />
          ))}
        </div>
      </section>
    </article>
  );
}
