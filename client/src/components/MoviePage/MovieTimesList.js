import MovieTimes from "./MovieTimes";
import "../../CSS/Movies/MovieDetails.css";
import useMovieContext from "../../hooks/useMovieContext";

export default function MovieTimesList({ movie }) {
  const { date } = useMovieContext();

  const renderedList = movie.shows?.map((show) => {
    if (show.date === date) {
      return <MovieTimes show={show} movie={movie} />;
    }
  });

  return <div className="movie-times-list">{renderedList}</div>;
}
