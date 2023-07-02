import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/ComingSoon/ComingSoonShow.css";

const ComingSoonShow = ({ movie, link }) => {
  return (
    <div className="comingSoon-container">
      <img className="comingSoon-poster" src={movie.poster} alt="" />
      <div className="comingSoon-details">
        <h1>{movie.title}</h1>
        <h2>Rated: {movie.rated}</h2>
        <h3>Running Time: {movie.runtime}</h3>
        <h3>Released Date:</h3>
        <Link state={{ movie: movie }} to={`/${link}/${movie._id}`}>
          <button className="movie-show-button">More Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonShow;
