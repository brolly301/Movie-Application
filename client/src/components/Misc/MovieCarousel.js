import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowingCarousel.css";

export default function MovieCarousel({ movies }) {
  const setting = {
    dots: true,
    infinite: "true",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const renderedList = movies.map((movie) => {
    return (
      <div>
        <img className="showing-carousel-image" src={movie?.poster} />
      </div>
    );
  });

  return (
    <div className="showing-carousel-container">
      <Slider {...setting}>{renderedList}</Slider>
    </div>
  );
}
