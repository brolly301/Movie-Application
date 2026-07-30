import useMovieContext from "../../hooks/useMovieContext";
import MovieDatesShow from "./MovieDatesShow";
import { useEffect, useMemo } from "react";

const MovieDatesList = () => {
  const { movies, date, setDate } = useMovieContext();

  const movieDates = useMemo(() => {
    const dates = movies.flatMap((movie) =>
      movie.shows.map((show) => show.date),
    );

    return [...new Set(dates)].sort(
      (first, second) => new Date(first) - new Date(second),
    );
  }, [movies]);

  useEffect(() => {
    if (movieDates.length && !movieDates.includes(date)) {
      setDate(movieDates[0]);
    }
  }, [movieDates, date, setDate]);

  const renderedList = movieDates.map((movieDate) => {
    return (
      <MovieDatesShow
        key={movieDate}
        date={movieDate}
        isActive={movieDate === date}
      />
    );
  });

  return <div className={"movie-times-list"}>{renderedList}</div>;
};

export default MovieDatesList;
