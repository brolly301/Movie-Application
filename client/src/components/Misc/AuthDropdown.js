import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function AuthDropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <li className="auth-dropdown" key={option.id} onClick={closeDropdown}>
        {option.name}
      </li>
    );
  });

  return (
    <div className="auth-container">
      <button
        type="button"
        className="nav-user-button"
        onClick={toggleDropdown}
        aria-label="Open account menu"
        aria-expanded={isOpen}
      >
        <FaUser className="nav-user-icon" aria-hidden="true" />
      </button>

      {isOpen && <ul className="auth-list">{renderedOptions}</ul>}
    </div>
  );
}
