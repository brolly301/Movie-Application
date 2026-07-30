import { useEffect, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(value));

export default function DateDropdown({
  options,
  handleDate,
  movie,
  handleSelectedDate,
  active,
}) {
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelected("");
      setIsOpen(false);
  }, [movie]);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
      setSelected(formatDate(option));
    setIsOpen(!isOpen);
    handleDate(option);
    handleSelectedDate(option);
  };

  const newList = [...new Set(options.map((option) => option.date))];

  const renderedOptions = newList?.map((option) => {
    return (
      <div
        className="movie-search-dropdowns"
        key={option}
        onClick={() => handleSelected(option)}
      >
      {formatDate(option)}
      </div>
    );
  });

  return (
    <div className="movie-input-container">
      <button
        onClick={handleClick}
        type="button"
         disabled={!movie}
        className={active ? "movie-search-input" : "movie-display-hidden"}
      >
        <span className="movie-dropdown-icon-container">
          {selected || "Choose Date..."}
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
