import useMovieContext from "../../hooks/useMovieContext";
import MovieShow from "./MovieShow";

export default function MovieList() {
  const { movies, date } = useMovieContext();

  const renderedList = movies?.map((movie) => {
    movie.shows.filter((show) => {
      if (show.date === date) {
        return <MovieShow key={movie.imdbID} movie={movie} link="showtimes" />;
      }
    });
  });

  return <div>{renderedList}</div>;
}
