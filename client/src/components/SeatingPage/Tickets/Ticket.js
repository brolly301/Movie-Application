import React from "react";
import { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";
import useTicketContext from "../../../hooks/useTicketContext";

export default function Ticket({ product, price, seats, id }) {
  const [counter, setCounter] = useState(0);

  const {
    addProduct,
    addQuantity,
    removeQuantity,
    deleteTicket,
    ticketData,
    totalTickets,
  } = useTicketContext();

  const handleIncrease = () => {
    if (seats.length !== totalTickets) {
      if (counter < seats.length) {
        setCounter((counter) => counter + 1);

        if (ticketData.length <= 0) {
          addProduct(id, product, price);
        } else {
          ticketData?.map((ticket) => {
            if (ticket.id !== id) {
              addProduct(id, product, price);
            } else {
              addQuantity(id);
            }
          });
        }
      }
    }
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);

      if (counter <= 1) {
        deleteTicket(id);
      } else {
        removeQuantity(id);
      }
    }
  };

  return (
    <div className="ticket-container">
      <div className="ticket-price-type-container">
        <span className="ticket-type">{product}</span>
        <span className="ticket-price">£{price.toFixed(2)}</span>
      </div>
      <span className="ticket-button-container">
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </span>
    </div>
  );
}
