import useMovieContext from "../../hooks/useMovieContext";
import "../../CSS/Movies/MovieDates.css";
export default function MovieDatesShow({ date }) {
  const { setDate } = useMovieContext();

  const handleClick = (e) => {
    setDate(e.target.value);
  };

  const formattedDate = date.substring(4, 10);

  return (
    <div className="movie-date-show">
      <button
        className="movie-date-button"
        onClick={handleClick}
        value={formattedDate}>
        {formattedDate}
      </button>
    </div>
  );
}
