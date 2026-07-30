import useMovieContext from "../../hooks/useMovieContext";
import "../../CSS/Movies/MovieDates.css";

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(value));

export default function MovieDatesShow({ date, isActive }) {
  const { setDate } = useMovieContext();

  return (
    <div className="movie-date-show">
      <button
        type="button"
        className={
          isActive
            ? "movie-date-button movie-date-button-active"
            : "movie-date-button"
        }
        onClick={() => setDate(date)}
      >
        {formatDate(date)}
      </button>
    </div>
  );
}
