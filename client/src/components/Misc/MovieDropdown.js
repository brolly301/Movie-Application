import { useState } from "react";

export default function MovieDropdown({
  options,
  selectedMovie,
  handleSelectedMovie,
}) {
  const [selected, setSelected] = useState(null);
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
    <div>
      <input
        onClick={handleClick}
        type="text"
        placeholder={selected?.title || "Choose Movie..."}
        readOnly
      />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
