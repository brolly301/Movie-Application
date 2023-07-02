import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";
import MovieTimes from "../MoviePage/MovieTimes";
import useMovieContext from "../../hooks/useMovieContext";
import MovieShowShowtimes from "./MovieShowShowtimes";

export default function MovieShow({ movie, link }) {
  const { date } = useMovieContext();

  const renderedList = movie.shows?.map((show) => {
    if (show.date.substring(4, 10) === date) {
      return <MovieTimes key={show._id} show={show} movie={movie} />;
    }
  });

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <h2>Rated: {movie.rated}</h2>
        <h3>Running Time: {movie.runtime}</h3>
        <h3>Date: {date}</h3>
        <Link state={{ movie: movie }} to={`/${link}/${movie._id}`}>
          <button className="movie-show-button">More Details</button>
        </Link>
      </div>
      <div className="movie-showtimes-container">
        <MovieShowShowtimes
          showtimes={renderedList}
          movie={movie}
          link={link}
        />
      </div>
    </div>
  );
}
