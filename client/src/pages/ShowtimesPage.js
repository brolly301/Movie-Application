import MovieList from "../components/ShowtimesPage/MovieList";
import MovieDatesList from "../components/ShowtimesPage/MovieDatesList";
import "../CSS/PageSizes.css";
import "../CSS/Movies/MovieShow.css";

export default function ShowtimesPage() {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="movie-page-title" style={{ textAlign: "center" }}>
        What's On - Currently Showing
      </h1>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
        }}>
        <MovieDatesList />
      </div>
      <MovieList />
    </div>
  );
}
