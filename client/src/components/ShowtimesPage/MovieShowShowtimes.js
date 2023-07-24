import React from "react";

const MovieShowShowtimes = ({ showtimes, movie, link }) => {
  return (
    <div>
      <h1 className="showtimes-title">Showtimes</h1>
      <div>{showtimes}</div>
    </div>
  );
};

export default MovieShowShowtimes;
