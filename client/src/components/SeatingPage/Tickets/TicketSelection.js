import React from "react";
import Ticket from "./Ticket";
import "../../../CSS/Seating/Tickets/TicketSelection.css";

export default function TicketSelection({ seats }) {
  // const renderedList = ticketsData.map((option) => {
  //   return (
  //     <Ticket
  //       product={option.product}
  //       price={option.price}
  //       quantity={option.quantity}
  //       seats={seats}
  //     />
  //   );
  // });

  return (
    <div className="ticket-selection-main">
      <h1>Choose Tickets</h1>
      <hr />
      <div className="ticket-selection-container">
        <Ticket seats={seats} price={"£9.00"}>
          Standard
        </Ticket>
      </div>
    </div>
  );
}
