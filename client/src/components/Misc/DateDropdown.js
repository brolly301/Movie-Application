import { useEffect, useState } from "react";

export default function DateDropdown({
  options,
  handleDate,
  movie,
  handleSelectedDate,
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
