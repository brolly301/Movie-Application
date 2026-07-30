import { useState } from "react";
import useMovieContext from "../../hooks/useMovieContext";
import MovieDropdown from "../Misc/MovieDropdown";
import DateDropdown from "../Misc/DateDropdown";
import TimeDropdown from "../Misc/TimeDropdown ";
import "../../CSS/HomePage/MovieSearch.css";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const isBookingReady = Boolean(
    formData.movie && formData.date && formData.startTime && formData.seats,
  );

  const handleBook = () => {
    if (!isBookingReady) return;

    navigate(`/showtimes/${formData.movie._id}/seating`, {
      state: {
        movie: formData.movie,
        show: formData,
        seats: formData.seats,
      },
    });
  };

  const handleSelectedMovie = (option) => {
    setFormData({
      movie: option,
      date: null,
      startTime: null,
      seats: null,
    });

    setDate(undefined);
  };

  const handleSelectedDate = (option) => {
    setFormData((current) => ({
      ...current,
      date: option,
      startTime: null,
      seats: null,
    }));
  };

  const handleSelectedTime = (option) => {
    setFormData((current) => ({
      ...current,
      startTime: option.startTime,
      seats: option.seats,
    }));
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
      <button
        type="button"
        onClick={handleBook}
        disabled={!isBookingReady}
        className={active ? "movie-search-book-button" : "movie-display-hidden"}
      >
        Book
      </button>
    </div>
  );
}
