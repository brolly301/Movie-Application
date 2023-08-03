import React from "react";
import { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";

export default function Ticket({
  product,
  price,
  onEdit,
  onRemove,
  onDelete,
  quantity,
  onCreate,
  seats,
  ticketData,
  setTicketData,
  id,
}) {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    if (counter < seats.length) {
      setCounter((counter) => counter + 1);

      if (ticketData.length <= 0) {
        onCreate(id, product, price);
      } else {
        ticketData?.map((ticket) => {
          if (ticket.id !== id) {
            onCreate(id, product, price);
          } else {
            onEdit(id);
          }
        });
      }
    }
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);

      if (counter <= 1) {
        onDelete(id);
      } else {
        onRemove(id);
      }
    }
  };

  return (
    <div className="ticket-container">
      <span className="ticket-type">{product}</span>
      <span className="ticket-price">£{price}</span>
      <span className="ticket-button-container">
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </span>
    </div>
  );
}
