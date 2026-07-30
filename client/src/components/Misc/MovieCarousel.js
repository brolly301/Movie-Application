import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowingCarousel.css";

export default function MovieCarousel({ movies = [], link }) {
  const setting = {
    dots: true,
    infinite: "true",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  const renderedList = movies.map((movie) => {
    return (
      <div className="movie-card-slide" key={movie._id}>
      <Link
        className="movie-card"
        to={`/${link}/${movie._id}`}
        state={{ movie }}
      >
        <div className="movie-card-image-container">
          <img
            className="movie-card-image"
            src={movie.poster}
            alt={`${movie.title} poster`}
            loading="lazy"
          />
        </div>

        <div className="movie-card-details">
          <h3>{movie.title}</h3>
          <p>
            {movie.year}
            {movie.genre && ` · ${movie.genre.split(",")[0]}`}
          </p>
        </div>
      </Link>
    </div>
    );
  });

  return (
    <div className="showing-carousel-container">
      <Slider {...setting}>{renderedList}</Slider>
    </div>
  );
}
