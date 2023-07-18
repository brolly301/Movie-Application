import { useEffect, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

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
  }, [movie]);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(!isOpen);
    handleDate(option);
    handleSelectedDate(option);
  };

  const newList = [
    ...new Set(options.map((option) => option.date.substring(4, 10))),
  ];

  const renderedOptions = newList?.map((option) => {
    return (
      <div
        className="movie-search-dropdowns"
        key={Math.floor(Math.random() * 10000)}
        onClick={() => handleSelected(option)}
      >
        {option}
      </div>
    );
  });

  return (
    <div className="movie-input-container">
      <button
        onClick={handleClick}
        type="text"
        readOnly
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

      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
