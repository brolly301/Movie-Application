import useMovieContext from "../../hooks/useMovieContext";
import MovieList from "./MovieList";

export default function MovieDates() {
  const { setDate } = useMovieContext();

  const handleClick = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick} value="12th June">
        12th June
      </button>
      <button onClick={handleClick} value="13th June">
        13th June
      </button>
    </div>
  );
}
