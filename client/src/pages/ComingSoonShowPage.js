import { Navigate, useLocation, useParams } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import useMovieContext from "../hooks/useMovieContext";
import Banner from "../components/HomePage/Banner";
import MovieCarousel from "../components/Misc/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";

export default function ComingSoonShowPage() {
  const { comingSoon } = useMovieContext();
  const { id } = useParams();
  const location = useLocation();

  const movie =
    location.state?.movie || comingSoon.find((item) => item._id === id);

  if (!movie && comingSoon.length === 0) {
    return <p className="movie-details-status">Loading film...</p>;
  }

  if (!movie) {
    return <Navigate to="/comingSoon" replace />;
  }

  return (
    <main className="movie-details-page">
      <MovieDetails movie={movie} />
      <Banner>Coming soon</Banner>
      <MovieCarousel movies={comingSoon} link="comingSoon" />
    </main>
  );
}
