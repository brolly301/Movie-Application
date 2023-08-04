import { createContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
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

  const valuestoShare = {
    addProduct,
    addQuantity,
    removeQuantity,
    deleteTicket,
    ticketData,
    setTicketData,
    totalTickets,
  };

  return (
    <TicketContext.Provider value={valuestoShare}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
