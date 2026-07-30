import React, { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";
import useExtraContext from "../../../hooks/useExtraContext";

export default function Extra({ product, price, id }) {
  const { extraData, updateExtraQuantity } = useExtraContext();

  const extra = extraData.find((item) => item.id === id);
  const quantity = extra?.quantity ?? 0;

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
          onClick={() => updateExtraQuantity(id, product, price, -1)}
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={() => updateExtraQuantity(id, product, price, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
