import { useLocation } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import MovieTimesList from "../components/MoviePage/MovieTimesList";
import useMovieContext from "../hooks/useMovieContext";
import Banner from "../components/HomePage/Banner";
import MovieCarousel from "../components/Misc/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";

export default function MoviePage() {
  const { movies } = useMovieContext();
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <MovieSearch />
      <MovieDetails movie={movie} link="showtimes" />
      <br />
      <br />
      <Banner>Now Showing</Banner>
      <MovieCarousel movies={movies} />
    </div>
  );
}
