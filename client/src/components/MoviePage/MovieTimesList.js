import MovieTimes from "./MovieTimes";
import "../../CSS/Movies/MovieDetails.css";

export default function MovieTimesList({ movie }) {
  const renderedList = movie.shows?.map((show) => {
    return <MovieTimes show={show} movie={movie} />;
  });

  return <div className="movie-times-list">{renderedList}</div>;
}
