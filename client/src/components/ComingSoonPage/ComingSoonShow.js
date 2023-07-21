import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/ComingSoon/ComingSoonShow.css";
import { sendNotification } from "../../APIs/contact";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";

const ComingSoonShow = ({ movie, link }) => {
  const { userData } = useUserContext();

  const handleClick = async (e) => {
    e.preventDefault();

    if (!userData.email) {
      toast("Please login to get notifications about upcoming movies.");
    } else {
      const res = await sendNotification(userData.email, movie);
      if (res.error) toast(res.error);
      else {
        toast("You will be notified near this movies release!");
      }
    }
  };

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
            <button
              onClick={handleClick}
              className="comingSoon-show-notified-button">
              Get notified
            </button>
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
          to={`/${link}/${movie._id}`}>
          <button className="comingSoon-show-button-2">More Details</button>
        </Link>
        <button className="comingSoon-show-button-2">Get notified</button>
      </div>
    </div>
  );
};

export default ComingSoonShow;
