import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowingCarousel.css";

export default function MovieCarousel({ movies, link }) {
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
        breakpoint: 1260,
        settings: {
          dots: true,
          infinite: "true",
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          dots: true,
          infinite: "true",
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 910,
        settings: {
          dots: true,
          infinite: "true",
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 660,
        settings: {
          dots: true,
          infinite: "true",
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 450,
        settings: {
          dots: false,
          infinite: "true",
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  const renderedList = movies.map((movie) => {
    return (
      <div>
        <Link state={{ movie: movie }} to={`/${link}/${movie?._id}`}>
          <img className="showing-carousel-image" src={movie?.poster} />
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
