import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSceneCarousel.css";

export default function MovieSceneCarousel() {
  const images = [
    {
      title: "inception",
      image:
        "https://r4.wallpaperflare.com/wallpaper/267/487/613/inception-movies-wallpaper-d980c82d71aa5dfb86e7f8fff071265d.jpg",
    },
    {
      title: "pulpFiction",
      image:
        "https://r4.wallpaperflare.com/wallpaper/207/333/124/movie-pulp-fiction-wallpaper-7930886de16a0d0bd667388fd001d64d.jpg",
    },
    {
      title: "fightClub",
      image:
        "https://r4.wallpaperflare.com/wallpaper/642/893/115/american-bale-bateman-christian-wallpaper-c980085df10a0dcbc6b7f84fa051863d.jpg",
    },
    {
      title: "interstellar",
      image:
        "https://r4.wallpaperflare.com/wallpaper/755/16/993/biography-comedy-drama-wallstreet-wallpaper-fa3dda2bf88cc723c6822f063735f196.jpg",
    },
    {
      title: "theDarkKnight",
      image:
        "https://r4.wallpaperflare.com/wallpaper/838/223/687/movies-the-dark-knight-joker-heath-ledger-wallpaper-624192a06df61e2b7a58c275f0d8a9e2.jpg",
    },
  ];

  const setting = {
    infinite: "true",
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const renderedList = images.map((image) => {
    return (
      <div>
        <img className="movie-scene-carousel-image" src={image.image} />
      </div>
    );
  });

  return (
    <div className="movie-scene-carousel-container">
      <Slider {...setting}>{renderedList}</Slider>
    </div>
  );
}
