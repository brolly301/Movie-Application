import MovieList from "../components/ShowtimesPage/MovieList";
import MovieDatesList from "../components/ShowtimesPage/MovieDatesList";

export default function ShowtimesPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Current Showtimes</h1>
      <div style={{ textAlign: "center" }}>
        <MovieDatesList />
      </div>
      <MovieList />
    </div>
  );
}
