import { useLocation, Navigate, useParams } from "react-router-dom";
import MovieDetails from "../components/MoviePage/MovieDetails";
import MovieTimesList from "../components/MoviePage/MovieTimesList";
import useMovieContext from "../hooks/useMovieContext";
import Banner from "../components/HomePage/Banner";
import MovieCarousel from "../components/Misc/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";

export default function MoviePage() {
  const { movies } = useMovieContext();
  const { id } = useParams();
  const location = useLocation();

  const movie = location.state?.movie || movies.find((item) => item._id === id);

  if (!movie && movies.length === 0) {
    return <p className="movie-details-status">Loading film...</p>;
  }

  if (!movie) {
    return <Navigate to="/showtimes" replace />;
  }

  return (
    <main className="movie-details-page">
      <MovieSearch />
      <MovieDetails movie={movie} showBooking />
      <Banner>Now showing</Banner>
      <MovieCarousel movies={movies} link="showtimes" />
    </main>
  );
}
