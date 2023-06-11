import useMovieContext from "../../hooks/useMovieContext";
import MovieShow from "./MovieShow";

export default function MovieList() {
  const { movies } = useMovieContext();

  const renderedList = movies?.map((movie) => {
    return <MovieShow key={movie.imdbID} movie={movie} />;
  });

  return <div>{renderedList}</div>;
}
