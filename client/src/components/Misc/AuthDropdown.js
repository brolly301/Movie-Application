import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function AuthDropdown({ options }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    console.log("Clicked");
  };

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div
        className="auth-dropdown"
        key={option.id}
        onClick={() => handleSelected(option)}>
        <div>{option.name}</div>
      </div>
    );
  });

  return (
    <div>
      <FaUser className="nav-user" onClick={handleClick} />
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
