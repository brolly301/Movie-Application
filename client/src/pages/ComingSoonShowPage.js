import { useLocation } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import useMovieContext from "../hooks/useMovieContext";
import Banner from "../components/HomePage/Banner";
import MovieCarousel from "../components/Misc/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";

export default function ComingSoonShowPage() {
  const { comingSoon } = useMovieContext();
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <MovieSearch />
      <MovieDetails movie={movie} link="coming-soon" />
      <br />
      <br />
      <Banner>Coming Soon</Banner>
      <MovieCarousel movies={comingSoon} />
    </div>
  );
}
