import { createContext, useState } from "react";
import getMovies from "../APIs/OMDB";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const submitMovie = async (title) => {
    const results = await getMovies(title);
    setMovies(results);
    console.log(movies);
  };

  const values = {
    movies,
    setMovies,
    submitMovie,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}

export default MovieContext;
