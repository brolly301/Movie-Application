import { createContext, useEffect, useState } from "react";
import { getMovies } from "../APIs/movies";
// import getMovies from "../APIs/OMDB";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = getMovies().then((res) => {
      setMovies(res);
    });
  }, []);

  const values = {
    movies,
    setMovies,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}

export default MovieContext;
