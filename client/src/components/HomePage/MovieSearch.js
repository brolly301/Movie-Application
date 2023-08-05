import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMovieContext from "../../hooks/useMovieContext";
import MovieDropdown from "../Misc/MovieDropdown";
import DateDropdown from "../Misc/DateDropdown";
import TimeDropdown from "../Misc/TimeDropdown ";
import "../../CSS/HomePage/MovieSearch.css";

export default function MovieSearch() {
  const { movies } = useMovieContext();
  const [date, setDate] = useState();
  const [active, setActive] = useState(window.innerWidth <= 920 ? false : true);

  const [formData, setFormData] = useState({
    movie: null,
    date: null,
    startTime: null,
    seats: null,
  });

  const [selectedMovie, setSelectedMovie] = useState({
    movie: null || [],
    dates: [],
    startTime: [],
  });

  console.log(formData);

  const handleSelectedMovie = (option) => {
    setFormData({ ...formData, movie: option });
  };
  const handleSelectedDate = (option) => {
    setFormData({ ...formData, date: option });
  };
  const handleSelectedTime = (option) => {
    setFormData({
      ...formData,
      startTime: option.startTime,
      seats: option.seats,
    });
    console.log(formData);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  //This needs to be set in either the date or time dropdown to set the startTime to the specific show instead of all the shows
  const handleSetMovie = (movie) => {
    setSelectedMovie({
      movie: movie,
      dates: movie.shows,
      startTime: movie.shows,
    });
  };

  const handleClick = (e) => {
    if (window.innerWidth <= 920) {
      setActive(!active);
    }
  };

  return (
    <div className="movie-search-container">
      <button onClick={handleClick} className="movie-search-quick-button">
        Quick Book
      </button>
      <MovieDropdown
        options={movies}
        selectedMovie={handleSetMovie}
        handleSelectedMovie={handleSelectedMovie}
        active={active}
      />
      <DateDropdown
        options={selectedMovie.dates}
        handleDate={handleDate}
        movie={selectedMovie.movie}
        handleSelectedDate={handleSelectedDate}
        active={active}
      />
      <TimeDropdown
        options={selectedMovie.startTime}
        date={date}
        movie={selectedMovie.movie}
        handleSelectedTime={handleSelectedTime}
        active={active}
      />
      <Link
        className="movie-book-link"
        to={`showtimes/${formData.movie?._id}/seating`}
        state={{
          movie: formData.movie,
          show: formData,
          seats: formData.seats,
        }}
      >
        <button
          className={
            active ? "movie-search-book-button" : "movie-display-hidden"
          }
        >
          Book
        </button>
      </Link>
    </div>
  );
}
