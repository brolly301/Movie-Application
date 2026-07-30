import MovieList from "../components/ShowtimesPage/MovieList";
import MovieDatesList from "../components/ShowtimesPage/MovieDatesList";
import "../CSS/Movies/MovieShow.css";

export default function ShowtimesPage() {
  return (
    <main className="showtimes-page">
      <header className="showtimes-page-header">
        <h1>What’s on</h1>
        <p>Choose a date to see available films and times.</p>
      </header>
      <MovieDatesList />
      <MovieList />
    </main>
  );
}