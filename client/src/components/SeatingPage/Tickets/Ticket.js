import React from "react";
import { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";

export default function Ticket({ price, seats, children }) {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    if (counter < seats.length) {
      setCounter((counter) => counter + 1);
    }
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <div className="ticket-container">
      <span className="ticket-type">{children}</span>
      <span className="ticket-price">{price}</span>
      <span className="ticket-button-container">
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </span>
    </div>
  );
}
