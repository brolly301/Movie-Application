import { GoChevronRight } from "react-icons/go";
import { useLocation } from "react-router-dom";
import "../../CSS/Seating/BookingJourney.css";

export default function BookingJourney() {
  const { pathname } = useLocation();

  const steps = [
    {
      label: "Choose seats",
      active: pathname.includes("/seating"),
    },
    {
      label: "Tickets & extras",
      active: pathname.includes("/tickets"),
    },
    {
      label: "Confirmation",
      active: pathname.includes("/confirmation"),
    },
  ];

  return (
    <nav className="booking-journey-container">
      <ol className="booking-journey-list">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={step.active ? "booking-journey-active" : ""}
          >
            <span>{step.label}</span>
            {index < steps.length - 1 && (
              <GoChevronRight className="booking-journey-icon" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
