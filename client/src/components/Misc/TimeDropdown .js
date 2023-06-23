import { useState } from "react";

export default function TimeDropdown({ options, date }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(!isOpen);
  };

  const newList = options?.map((show) => {
    if (show.date === date) {
      return show.startTime;
    }
  });
  console.log(newList);

  const renderedOptions = newList?.map((option) => {
    return (
      <div
        key={Math.floor(Math.random() * 10000)}
        onClick={() => handleSelected(option)}>
        {option}
      </div>
    );
  });

  return (
    <div>
      <input
        onClick={handleClick}
        type="text"
        placeholder={selected?.startTime || "Search..."}
        readOnly
      />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
