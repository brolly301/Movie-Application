import Banner from "../components/HomePage/Banner";
import MovieCarousel from "../components/HomePage/MovieCarousel";
import MovieSearch from "../components/HomePage/MovieSearch";
import useMovieContext from "../hooks/useMovieContext";
import SpecialOffers from "../components/HomePage/SpecialOffers";

export default function HomePage() {
  const { movies, comingSoon } = useMovieContext();

  return (
    <div>
      <MovieSearch />
      <Banner>Now Showing</Banner>
      <MovieCarousel movies={movies} />
      <Banner>Coming Soon</Banner>
      <MovieCarousel movies={comingSoon} />
      <Banner>Special Offers & Deals</Banner>
      <SpecialOffers />
    </div>
  );
}
