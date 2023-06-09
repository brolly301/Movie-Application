export default function MovieShow({ movie }) {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
      <img src={movie.Poster} alt="" />
    </div>
  );
}
