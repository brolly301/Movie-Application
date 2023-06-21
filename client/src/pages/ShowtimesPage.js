import MovieList from "../components/ShowtimesPage/MovieList";
import MovieDates from "../components/ShowtimesPage/MovieDates";

export default function ShowtimesPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Current Showtimes</h1>
      <div style={{ textAlign: "center" }}>
        <MovieDates />
      </div>
      <MovieList />
    </div>
  );
}
