import { useEffect, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function TimeDropdown({
  options,
  date,
  movie,
  handleSelectedTime,
  active,
}) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelected("");
      setIsOpen(false);
  }, [movie, date]);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option?.startTime);
    setIsOpen(!isOpen);
    handleSelectedTime(option);
  };

 const matchingShows = options.filter((show) => show.date === date);

  const renderedOptions = matchingShows.map((option) => {
    return (
      <div
        className="movie-search-dropdowns"
        key={option._id}
        onClick={() => handleSelected(option)}
      >
        {option?.startTime}
      </div>
    );
  });

  return (
    <div className="movie-input-container">
     <button
  type="button"
  disabled={!date}
  onClick={handleClick}
  className={active ? "movie-search-input" : "movie-display-hidden"}
>
        <span className="movie-dropdown-icon-container">
          {selected || "Choose Time..."}
          {isOpen ? (
            <GoChevronLeft className="movie-dropdown-icons" />
          ) : (
            <GoChevronDown className="movie-dropdown-icons" />
          )}
        </span>
      </button>

      {isOpen && <div className="dropdown-list">{renderedOptions}</div>}
    </div>
  );
}
