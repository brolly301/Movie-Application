import useMovieContext from "../../hooks/useMovieContext";
import MovieShow from "../ShowtimesPage/MovieShow";

export default function ComingSoonList() {
  const { comingSoon } = useMovieContext();

  const renderedList = comingSoon?.map((movie) => {
    return <MovieShow key={movie.imdbID} movie={movie} link="comingSoon" />;
  });

  return <div>{renderedList}</div>;
}
