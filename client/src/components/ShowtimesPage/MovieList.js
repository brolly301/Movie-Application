import useMovieContext from "../../hooks/useMovieContext";
import MovieShow from "./MovieShow";

export default function MovieList() {
  const { movies, date } = useMovieContext();

  //Maps through movies array to get individual movie
  //Some function tests if at least one date meets the condition
  const renderedList = movies?.map((movie) => {
    if (movie.shows.some((show) => show.date === date)) {
      return <MovieShow key={movie.imdbID} movie={movie} link="showtimes" />;
    }
  });

  return <div>{renderedList}</div>;
}
