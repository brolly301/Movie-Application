import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/ComingSoon/ComingSoonShow.css";

const ComingSoonShow = ({ movie, link }) => {
  return (
    <div className="comingSoon-container">
      <div className="comingSoon-poster_title">
        <h1 className="movie-title-hidden">{movie.title}</h1>
        <img className="comingSoon-poster" src={movie.poster} alt="" />
        <Link state={{ movie: movie }} to={`/${link}/${movie._id}`}>
          <button className="comingSoon-show-button">More Details</button>
        </Link>
      </div>
      <div className="comingSoon-details">
        <h1 className="movie-title">
          {movie.title} <img src={movie.rated} className="movie-rating-icon" />
        </h1>
        <div className="comingSoon-details-row">
          <div className="comingSoon-details-column-1">
            <label>Genre:</label>
            <h3>{movie.genre}</h3>
            <label>Running Time:</label>
            <h3>{movie.runtime}</h3>
            <label className="comingSoon-hidden">Released Date:</label>
            <h3 className="comingSoon-hidden">13th February 2009</h3>
          </div>
          <div className="comingSoon-details-column-2">
            <label>Released Year:</label>
            <h3>13th February 2009</h3>
            <label>Director:</label>
            <h3>{movie.director}</h3>
          </div>
        </div>
        <Link
          style={{ textDecoration: "none" }}
          state={{ movie: movie }}
          to={`/${link}/${movie._id}`}
        >
          <button className="comingSoon-show-button-2">More Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonShow;
