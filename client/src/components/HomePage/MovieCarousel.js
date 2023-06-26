import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../CSS/HomePage/MovieCarousel.css";

export default function MovieCarousel({ movies }) {
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
          gap: "320px",
          autoplay: true,
          interval: 5000,
        }}>
        <SplideSlide>
          <img src={movies[0]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[1]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[2]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[3]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[4]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[5]?.poster} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[6]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[7]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[8]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[9]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[10]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[11]?.poster} />
        </SplideSlide>
        <SplideSlide>
          <img src={movies[12]?.poster} />
        </SplideSlide>
      </Splide>
    </div>
  );
}
