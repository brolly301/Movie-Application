import useMovieContext from "../../hooks/useMovieContext";
import MovieShow from "./MovieShow";

export default function MovieList() {
  const { movies, date } = useMovieContext();

  const moviesByDate = movies.filter((movie) =>
    movie.shows.some((show) => show.date === date),
  );

  if (!date) {
    return null;
  }

  if (!moviesByDate.length) {
    return (
      <p className="movie-list-empty">No films are showing on this date.</p>
    );
  }

  return (
    <div className="movie-list">
      {moviesByDate.map((movie) => (
        <MovieShow key={movie._id} movie={movie} link="showtimes" />
      ))}
    </div>
  );
}
