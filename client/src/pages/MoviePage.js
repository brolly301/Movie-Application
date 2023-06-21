import { useLocation } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import MovieTimesList from "../components/MoviePage/MovieTimesList";

export default function MoviePage() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}
