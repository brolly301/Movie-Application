import Banner from "../components/HomePage/Banner";
import MovieSearch from "../components/HomePage/MovieSearch";
import useMovieContext from "../hooks/useMovieContext";
import SpecialOffers from "../components/HomePage/SpecialOffers";
import MovieCarousel from "../components/Misc/MovieCarousel";
import MovieSceneCarousel from "../components/Misc/MovieSceneCarousel";

export default function HomePage() {
  const { movies, comingSoon } = useMovieContext();

  return (
    <div>
      <MovieSearch />
      <MovieSceneCarousel />
      <Banner>Now Showing</Banner>
      <MovieCarousel movies={movies} />
      <Banner>Coming Soon</Banner>
      <MovieCarousel movies={comingSoon} />
      <Banner>Special Offers & Deals</Banner>
      <SpecialOffers />
    </div>
  );
}
