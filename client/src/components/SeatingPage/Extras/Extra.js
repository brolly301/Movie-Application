import React, { useState } from "react";
import "../../../CSS/Seating/Tickets/Ticket.css";
import useExtraContext from "../../../hooks/useExtraContext";

export default function Extra({ product, price, id }) {
  const [counter, setCounter] = useState(0);
  const { addProduct, addQuantity, removeQuantity, deleteTicket, extraData } =
    useExtraContext();

  const handleIncrease = () => {
    setCounter((counter) => counter + 1);
    if (extraData.length <= 0) {
      addProduct(id, product, price);
    } else {
      extraData?.map((extra) => {
        if (extra.id !== id) {
          addProduct(id, product, price);
        } else {
          addQuantity(id);
        }
      });
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
