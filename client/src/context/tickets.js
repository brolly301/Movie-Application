import { createContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState([]);

  const totalTickets = ticketData.reduce(
    (total, ticket) => total + ticket.quantity,
    0,
  );

  const updateTicketQuantity = (id, product, price, change) => {
    setTicketData((currentTickets) => {
      const existingTicket = currentTickets.find((ticket) => ticket.id === id);

      if (!existingTicket && change > 0) {
        return [
          ...currentTickets,
          {
            id,
            product,
            price,
            quantity: 1,
          },
        ];
      }

      if (!existingTicket) {
        return currentTickets;
      }

      const newQuantity = existingTicket.quantity + change;

      if (newQuantity <= 0) {
        return currentTickets.filter((ticket) => ticket.id !== id);
      }

      return currentTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket,
      );
    });
  };

  const valuesToShare = {
    ticketData,
    setTicketData,
    totalTickets,
    updateTicketQuantity,
  };

  return (
    <TicketContext.Provider value={valuesToShare}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
