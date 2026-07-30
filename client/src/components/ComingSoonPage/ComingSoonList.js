import useMovieContext from "../../hooks/useMovieContext";
import ComingSoonShow from "./ComingSoonShow";

export default function ComingSoonList() {
  const { comingSoon } = useMovieContext();

  if (!comingSoon?.length) {
    return (
      <p className="comingSoon-empty">
        No upcoming films are available right now.
      </p>
    );
  }

  return (
    <div className="comingSoon-list">
      {comingSoon.map((movie) => (
        <ComingSoonShow key={movie._id} movie={movie} link="comingSoon" />
      ))}
    </div>
  );
}
