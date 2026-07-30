import "../../CSS/Movies/MovieShow.css";
import { Link } from "react-router-dom";
import MovieTimes from "../MoviePage/MovieTimes";
import useMovieContext from "../../hooks/useMovieContext";
import MovieShowShowtimes from "./MovieShowShowtimes";

export default function MovieShow({ movie, link }) {
  const { date } = useMovieContext();

  const showsForDate = movie.shows.filter((show) => show.date === date);

  const renderedList = showsForDate.map((show) => (
    <MovieTimes key={show._id} show={show} movie={movie} />
  ));

  const splitActors = () =>
    movie.actors.split(",").map((value) => {
      return value.trim();
    });
  const splitGenres = () =>
    movie.genre.split(",").map((value) => {
      return value.trim();
    });
  const splitDirectors = () =>
    movie.director.split(",").map((value) => {
      return value.trim();
    });

  return (
    <div className="movie-container">
      <div className="movie-details-hidden">
        <h1 className="movie-show-title-hidden">
          {movie.title}
          <img src={movie.rated} className="movie-rating-icon" />
        </h1>
        <img className="movie-poster-hidden" src={movie.poster} alt="" />
      </div>
      <div className="movie-poster-details">
        <img className="movie-poster" src={movie.poster} alt="" />
        <div className="movie-details">
          <h1>
            {movie.title}
            <img src={movie.rated} className="movie-rating-icon" />
          </h1>
          <div className="movie-show-details-container ">
            <div className="movie-show-details-column-1">
              <label>Running Time:</label>
              <h3>{movie.runtime}</h3>
              <label>Starring:</label>
              <h3>{splitActors()[0]}</h3>
            </div>
            <div className="movie-show-details-column-2">
              <label>Genre:</label>
              <h3>{splitGenres()[0]}</h3>
              <label>Director:</label>
              <h3>{splitDirectors()[0]}</h3>
            </div>
          </div>

          <Link
            className="movie-show-button"
            state={{ movie }}
            to={`/${link}/${movie._id}`}
          >
            More details
          </Link>
        </div>
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
