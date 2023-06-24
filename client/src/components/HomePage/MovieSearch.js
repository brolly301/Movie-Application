import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMovieContext from "../../hooks/useMovieContext";
import MovieDropdown from "../Misc/MovieDropdown";
import DateDropdown from "../Misc/DateDropdown";
import TimeDropdown from "../Misc/TimeDropdown ";

export default function MovieSearch() {
  const { movies } = useMovieContext();
  const [date, setDate] = useState();

  const [formData, setFormData] = useState({
    movie: null,
    date: null,
    startTime: null,
  });

  const [selectedMovie, setSelectedMovie] = useState({
    movie: null || [],
    dates: [],
    startTime: [],
  });

  const handleSelectedMovie = (option) => {
    setFormData({ ...formData, movie: option });
    console.log(formData);
  };
  const handleSelectedDate = (option) => {
    setFormData({ ...formData, date: option });
    console.log(formData);
  };
  const handleSelectedTime = (option) => {
    setFormData({ ...formData, startTime: option });
    console.log(formData);
  };

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

  return (
    <div>
      <MovieDropdown
        options={movies}
        selectedMovie={handleSetMovie}
        handleSelectedMovie={handleSelectedMovie}
      />
      <DateDropdown
        options={selectedMovie.dates}
        handleDate={handleDate}
        movie={selectedMovie.movie}
        handleSelectedDate={handleSelectedDate}
      />
      <TimeDropdown
        options={selectedMovie.startTime}
        date={date}
        movie={selectedMovie.movie}
        handleSelectedTime={handleSelectedTime}
      />
      <Link
        to={`showtimes/${formData.movie?._id}/seating`}
        state={{ movie: formData.movie, show: formData }}
      >
        <button>Book</button>
      </Link>
    </div>
  );
}
