import { createContext, useEffect, useState } from "react";
import { getComingSoon, getMovies } from "../APIs/movies";
// import getMovies from "../APIs/OMDB";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [date, setDate] = useState(new Date().toString().substring(4, 10));

  useEffect(() => {
    const response = getMovies().then((res) => {
      setMovies(res);
    });
  }, []);
  useEffect(() => {
    const response = getComingSoon().then((res) => {
      setComingSoon(res);
    });
  }, []);

  const values = {
    movies,
    setMovies,
    comingSoon,
    setComingSoon,
    date,
    setDate,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}

export default MovieContext;
