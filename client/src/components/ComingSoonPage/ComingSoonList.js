import useMovieContext from "../../hooks/useMovieContext";
import ComingSoonShow from "./ComingSoonShow";

export default function ComingSoonList() {
  const { comingSoon } = useMovieContext();

  const renderedList = comingSoon?.map((movie) => {
    return (
      <ComingSoonShow
        key={Math.random() * 10000}
        movie={movie}
        link="comingSoon"
      />
    );
  });

  return <div className="comingSoon-list">{renderedList}</div>;
}
