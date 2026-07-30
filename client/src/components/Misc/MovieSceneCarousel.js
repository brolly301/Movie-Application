import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSceneCarousel.css";
import neonDivide from "../../images/movies/neon-divide.png";
import afterlight from "../../images/movies/afterlight.png";
import lastTransmission from "../../images/movies/lastTransmission.png";

export default function MovieSceneCarousel() {
  const slides = [
    {
      eyebrow: "Featured this week",
      title: "Neon Divide",
      description:
        "A detective follows a signal broadcasting from a city that officially disappeared twenty years ago.",
      certificate: "15",
      runtime: "1h 52m",
      genre: "Science Fiction",
      image: neonDivide,
    },
    {
      eyebrow: "Now showing",
      title: "Afterlight",
      description:
        "Two strangers cross an empty country searching for the final place where the sun still rises.",
      certificate: "12A",
      runtime: "2h 6m",
      genre: "Drama",
      image: afterlight,
    },
    {
      eyebrow: "New release",
      title: "Last Transmission",
      description:
        "A deep-space crew receives a distress call carrying their own voices from seven years in the future.",
      certificate: "15",
      runtime: "1h 44m",
      genre: "Thriller",
      image: lastTransmission,
    },
  ];

  const settings = {
    infinite: true,
    fade: true,
    speed: 700,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
  };

  const renderedList = slides.map((slide) => (
    <article className="hero-slide" key={slide.title}>
      <img
        className="hero-image"
        src={slide.image}
        alt={`${slide.title} featured artwork`}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">{slide.eyebrow}</p>
        <h2 className="hero-title">{slide.title}</h2>

        <ul className="hero-metadata" aria-label="Movie information">
          <li>{slide.certificate}</li>
          <li>{slide.runtime}</li>
          <li>{slide.genre}</li>
        </ul>

        <p className="hero-description">{slide.description}</p>

        <Link className="hero-action" to="/showtimes">
          Browse showtimes
        </Link>
      </div>
    </article>
  ));

  return (
    <div className="hero-carousel">
      <Slider {...settings}>{renderedList}</Slider>
    </div>
  );
}
