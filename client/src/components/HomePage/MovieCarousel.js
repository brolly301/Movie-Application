import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../CSS/HomePage/MovieCarousel.css";

export default function MovieCarousel({ movies }) {
  const renderedList = movies.map((movie) => {
    return (
      <SplideSlide>
        <img className="movie-carousel-image" src={movie?.poster} alt="" />
      </SplideSlide>
    );
  });

  return (
    <div>
      <Splide
        className="movie-carousel-container"
        options={{
          rewind: true,
          perMove: 1,
          width: 1200,
          height: 500,
          perPage: 5,
          gap: "30px",
          autoplay: true,
          interval: 5000,
        }}>
        {renderedList}
      </Splide>
    </div>
  );
}
