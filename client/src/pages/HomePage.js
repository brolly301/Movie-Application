import MovieCarousel from "../components/HomePage/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";
import useMovieContext from "../hooks/useMovieContext";

export default function HomePage() {
  const { movies, comingSoon } = useMovieContext();

  return (
    <div>
      <MovieSearch />
      <MovieCarousel movies={movies} />
      <MovieCarousel movies={comingSoon} />
    </div>
  );
}
