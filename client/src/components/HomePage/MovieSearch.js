import { useState } from "react";
import useMovieContext from "../../hooks/useMovieContext";
import MovieDropdown from "../Misc/MovieDropdown";
import DateDropdown from "../Misc/DateDropdown";
import TimeDropdown from "../Misc/TimeDropdown ";

export default function MovieSearch() {
  const { movies } = useMovieContext();
  const [selectedMovie, setSelectedMovie] = useState({
    movie: null || "",
    dates: [],
    startTime: [],
  });

  // const list =

  const handleSetMovie = (movie) => {
    setSelectedMovie({
      movie: movie,
      dates: [...new Set(movie.shows.map((show) => show.date))],
      startTime: selectedMovie.movie.shows?.map((show) => {
        if (show.date === "12th June") {
          return show.startTime;
        }
      }),
    });
  };

  // const handleSetDate = (date) => {
  //   setSelectedMovie({
  //     date: date,
  //   });
  // };

  // const handleSetTime = (startTime) => {
  //   setSelectedMovie({
  //     startTime: startTime,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MovieDropdown options={movies} selectedMovie={handleSetMovie} />
        <DateDropdown options={selectedMovie.dates} />
        <TimeDropdown options={selectedMovie.startTime} />
        <button>Book</button>
      </form>
    </div>
  );
}
