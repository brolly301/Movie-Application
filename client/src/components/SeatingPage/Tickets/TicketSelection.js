import React from "react";
import Ticket from "./Ticket";
import "../../../CSS/Seating/Tickets/TicketSelection.css";

export default function TicketSelection({
  onEdit,
  onCreate,
  onRemove,
  onDelete,
  totalTickets,
  seats,
  ticketData,
  setTicketData,
}) {
  const ticketsData = [
    {
      id: 1,
      product: "Standard",
      price: 9.0,
      quantity: 1,
    },
    {
      id: 2,
      product: "Kids",
      price: 6,
      quantity: 1,
    },
    {
      id: 3,
      product: "Seniors (60 & Older)",
      price: 7.5,
      quantity: 1,
    },
    {
      id: 4,
      product: "Student (Valid ID)",
      price: 7.5,
      quantity: 1,
    },
  ];

  const renderedList = ticketsData.map((option) => {
    return (
      <Ticket
        product={option.product}
        price={option.price}
        quantity={option.quantity}
        id={option.id}
        onEdit={onEdit}
        onCreate={onCreate}
        onRemove={onRemove}
        onDelete={onDelete}
        seats={seats}
        ticketData={ticketData}
        totalTickets={totalTickets}
        setTicketData={setTicketData}
      />
    );
  });

  return (
    <div className="ticket-selection-main">
      <h1>Choose Tickets</h1>
      <hr />
      <div className="ticket-selection-container">{renderedList}</div>
    </div>
  );
}
