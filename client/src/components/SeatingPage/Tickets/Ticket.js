import React from "react";
import { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";
import useTicketContext from "../../../hooks/useTicketContext";

export default function Ticket({ product, price, seats, id }) {
  const { ticketData, updateTicketQuantity, totalTickets } = useTicketContext();

  const ticket = ticketData.find((item) => item.id === id);
  const quantity = ticket?.quantity ?? 0;
  const maximumReached = totalTickets >= seats.length;

  return (
    <div className="ticket-container">
      <div className="ticket-price-type-container">
        <span className="ticket-type">{product}</span>
        <span className="ticket-price">£{price.toFixed(2)}</span>
      </div>
      <div className="ticket-button-container">
        <button
          type="button"
          disabled={quantity === 0}
          onClick={() => updateTicketQuantity(id, product, price, -1)}
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          disabled={maximumReached}
          onClick={() => updateTicketQuantity(id, product, price, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
