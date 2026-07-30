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
      <Banner link="/showtimes">Now Showing</Banner>
      <MovieCarousel movies={movies} link={"showtimes"} />
      <Banner link="/comingSoon">Coming Soon</Banner>
      <MovieCarousel movies={comingSoon} link={"comingSoon"} />
      <Banner link="/specialOffers">Special Offers & Deals</Banner>
      <SpecialOffers />
    </div>
  );
}
