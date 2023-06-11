import { useState } from "react";

export default function Dropdown({ options }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // const options = [
  //   {
  //     label: "Inception",
  //     value: "inception",
  //   },
  //   {
  //     label: "Django",
  //     value: "django",
  //   },
  //   {
  //     label: "Pulp Fiction",
  //     value: "pulp fiction",
  //   },
  // ];

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div key={option._id} onClick={() => handleSelected(option)}>
        {option.title}
      </div>
    );
  });

  return (
    <div>
      <input
        onClick={handleClick}
        type="text"
        placeholder={selected?.title || "Search..."}
        readOnly
      />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
