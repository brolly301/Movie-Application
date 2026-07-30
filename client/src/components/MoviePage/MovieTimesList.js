import MovieTimes from "./MovieTimes";
import useMovieContext from "../../hooks/useMovieContext";
import "../../CSS/Movies/MovieDetails.css";

export default function MovieTimesList({ movie }) {
  const { date } = useMovieContext();

  const showsForDate =
    movie.shows?.filter((show) => show.date === date) || [];

  if (!date) {
    return (
      <p className="movie-details-status">
        Choose a date to view showtimes.
      </p>
    );
  }

  if (showsForDate.length === 0) {
    return (
      <p className="movie-details-status">
        No showtimes are available on this date.
      </p>
    );
  }

  return (
    <div className="new-movies-times-list">
      {showsForDate.map((show) => (
        <MovieTimes
          key={show._id}
          show={show}
          movie={movie}
        />
      ))}
    </div>
  );
}