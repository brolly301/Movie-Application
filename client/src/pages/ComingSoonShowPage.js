import { useLocation } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import useMovieContext from "../hooks/useMovieContext";

export default function ComingSoonShowPage() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}
