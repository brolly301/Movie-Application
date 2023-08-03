import React, { useEffect, useState } from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import TicketSelection from "../components/SeatingPage/Tickets/TicketSelection";

export default function TicketsPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;
  const seats = location.state.seats;

  const [ticketData, setTicketData] = useState([]);

  const totalTickets = ticketData?.reduce(
    (total, ticket) => (total += ticket.quantity),
    0
  );

  const addProduct = (id, product, price) => {
    const createProduct = [
      ...ticketData,
      {
        product: product,
        price: price,
        quantity: 1,
        id: id,
      },
    ];
    setTicketData(createProduct);
  };

  const addQuantity = (id) => {
    const updatedTicket = ticketData.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, quantity: ticket.quantity + 1 };
      }
      return ticket;
    });
    setTicketData(updatedTicket);
  };

  const removeQuantity = (id) => {
    const updatedTicket = ticketData.map((ticket) => {
      if (ticket.id === id && ticket.quantity >= 1) {
        return { ...ticket, quantity: ticket.quantity - 1 };
      }
      return ticket;
    });
    setTicketData(updatedTicket);
  };

  const deleteTicket = (id) => {
    const updatedTickets = ticketData.filter((ticket) => {
      return ticket.id !== id;
    });
    setTicketData(updatedTickets);
  };

  console.log(ticketData);

  return (
    <div className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <TicketSelection
          setTicketData={setTicketData}
          ticketData={ticketData}
          seats={seats}
          onEdit={addQuantity}
          onCreate={addProduct}
          onRemove={removeQuantity}
          onDelete={deleteTicket}
          totalTickets={totalTickets}
        />
        <SeatDetails seats={seats} movie={movie} show={show} />
      </div>
    </div>
  );
}
