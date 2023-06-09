import MovieContext from "../context/movies";
import { useContext } from "react";

export default function useMovieContext() {
  return useContext(MovieContext);
}
