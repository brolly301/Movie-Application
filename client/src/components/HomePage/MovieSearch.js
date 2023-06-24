import { useState } from "react";
import useMovieContext from "../../hooks/useMovieContext";
import MovieDropdown from "../Misc/MovieDropdown";
import DateDropdown from "../Misc/DateDropdown";
import TimeDropdown from "../Misc/TimeDropdown ";

export default function MovieSearch() {
  const { movies } = useMovieContext();
  const [date, setDate] = useState();
  const [selectedMovie, setSelectedMovie] = useState({
    movie: null || [],
    dates: [],
    startTime: [],
  });

  const handleDate = (date) => {
    setDate(date);
  };

  const handleSetMovie = (movie) => {
    setSelectedMovie({
      movie: movie,
      dates: movie.shows,
      startTime: movie.shows,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MovieDropdown options={movies} selectedMovie={handleSetMovie} />
        <DateDropdown options={selectedMovie.dates} handleDate={handleDate} movie={selectedMovie.movie}/>
        <TimeDropdown options={selectedMovie.startTime} date={date} movie={selectedMovie.movie}/>
        <button>Book</button>
      </form>
    </div>
  );
}
