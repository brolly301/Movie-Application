import { useEffect, useState } from "react";

export default function TimeDropdown({
  options,
  date,
  movie,
  handleSelectedTime,
}) {
  const [selected, setSelected] = useState(null);
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
    handleSelectedTime(option);
  };

  const newList = options?.map((show) => {
    if (show.date.substring(4, 10) === date) {
      return show.startTime;
    }
  });

  const renderedOptions = newList?.map((option) => {
    return (
      <div
        key={Math.floor(Math.random() * 10000)}
        onClick={() => handleSelected(option)}
      >
        {option}
      </div>
    );
  });

  return (
    <div>
      <input
        onClick={handleClick}
        type="text"
        placeholder={selected || "Search..."}
        readOnly
      />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
