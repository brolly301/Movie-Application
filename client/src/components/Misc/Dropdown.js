import { useState } from "react";

export default function Dropdown() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: "Inception",
      value: "inception",
    },
    {
      label: "Django",
      value: "django",
    },
    {
      label: "Pulp Fiction",
      value: "pulp fiction",
    },
  ];

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div key={option.value} onClick={() => handleSelected(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <input
        onClick={handleClick}
        type="text"
        placeholder={selected?.label || "Search..."}
        readOnly
      />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
