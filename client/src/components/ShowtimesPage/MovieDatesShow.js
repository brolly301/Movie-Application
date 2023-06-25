import useMovieContext from "../../hooks/useMovieContext";
import MovieList from "./MovieList";

export default function MovieDatesShow({ date }) {
  const { setDate } = useMovieContext();

  const handleClick = (e) => {
    setDate(e.target.value);
  };

  const formattedDate = date.substring(4, 10);

  return (
    <div>
      <button onClick={handleClick} value={formattedDate}>
        {formattedDate}
      </button>
    </div>
  );
}
