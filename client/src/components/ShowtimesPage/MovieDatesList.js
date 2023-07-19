import useMovieContext from "../../hooks/useMovieContext";
import MovieDatesShow from "./MovieDatesShow";

const MovieDatesList = () => {
  const { movies } = useMovieContext();

  let datesArray = [];
  const mapDates = movies.map((movie) =>
    movie.shows.map((show) => datesArray.push(show.date))
  );

  const newDatesArray = [...new Set(datesArray.map((date) => date))];

  const renderedList = newDatesArray.map((date) => {
    return <MovieDatesShow date={date} />;
  });

  return (
    <div className="movie-times-list">
      <span style={{ display: "flex" }}>{renderedList}</span>
    </div>
  );
};

export default MovieDatesList;
