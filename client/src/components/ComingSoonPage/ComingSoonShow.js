import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/ComingSoon/ComingSoonShow.css";
import { sendNotification } from "../../APIs/contact";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";

const ComingSoonShow = ({ movie, link }) => {
  const { userData } = useUserContext();
  
  const formattedReleaseDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(movie.released));

    const handleNotification = async () => {
    if (!userData.email) {
      toast.info("Log in to receive release notifications.");
      return;
    }

    try {
      const response = await sendNotification(userData.email, movie);

      if (response.error) {
        toast.error(response.error);
        return;
      }

      toast.success(`We’ll notify you when ${movie.title} is releasing.`);
    } catch (error) {
      toast.error("The notification could not be created. Please try again.");
    }
  };

  return (
    <div className="comingSoon-container">
        <img
        className="comingSoon-poster"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />

      <div className="comingSoon-details">
        <header className="comingSoon-card-header">
          <h2>{movie.title}</h2>
          <img
            className="movie-rating-icon"
            src={movie.rated}
            alt={`${movie.title} age rating`}
          />
        </header>
        <dl className="comingSoon-meta">
          <div>
            <dt>Release date</dt>
            <dd>{formattedReleaseDate}</dd>
          </div>
          <div>
            <dt>Genre</dt>
            <dd>{movie.genre}</dd>
          </div>
          <div>
            <dt>Running time</dt>
            <dd>{movie.runtime}</dd>
          </div>
          <div>
            <dt>Director</dt>
            <dd>{movie.director}</dd>
          </div>
        </dl>
        <div className="comingSoon-actions">
          <Link
            className="comingSoon-show-button"
            state={{ movie }}
            to={`/${link}/${movie._id}`}
          >
            More details
          </Link>

          <button
            type="button"
            className="comingSoon-show-notified-button"
            onClick={handleNotification}
          >
            Email me details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonShow;
