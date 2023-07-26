import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function MovieDropdown({
  options,
  selectedMovie,
  handleSelectedMovie,
  active,
}) {
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option);
    selectedMovie(option);
    handleSelectedMovie(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div
        className="movie-search-dropdowns"
        key={option._id}
        onClick={() => handleSelected(option)}>
        {option.title}
      </div>
    );
  });

  return (
    <div className="movie-input-container">
      <button
        onClick={handleClick}
        type="text"
        readOnly
        className={active ? "movie-search-input" : "movie-display-hidden"}>
        <span className="movie-dropdown-icon-container">
          {selected?.title || "Choose Movie..."}
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
