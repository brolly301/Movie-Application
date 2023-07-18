import MovieList from "../components/ShowtimesPage/MovieList";
import MovieDatesList from "../components/ShowtimesPage/MovieDatesList";
import "../CSS/PageSizes.css";
import "../CSS/Movies/MovieShow.css";

export default function ShowtimesPage() {
  return (
    <div className="page-size">
      <h1 className="movie-page-title" style={{ textAlign: "center" }}>
        What's On - Currently Showing
      </h1>
      <div style={{ textAlign: "center" }}>{/* <MovieDatesList /> */}</div>
      <MovieList />
    </div>
  );
}
