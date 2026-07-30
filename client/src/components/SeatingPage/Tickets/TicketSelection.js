import Ticket from "./Ticket";
import "../../../CSS/Seating/Tickets/TicketSelection.css";

const ticketData= [
  { id: 1, product: "Standard", price: 9 },
  { id: 2, product: "Kids", price: 6 },
  { id: 3, product: "Seniors (60+)", price: 7.5 },
  { id: 4, product: "Student (Valid ID)", price: 7.5 },
];

export default function TicketSelection({ seats }) {
  return (
    <section className="ticket-selection-main">
      <header className="ticket-selection-header">
        <div>
          <h2>Choose tickets</h2>
          <p>Select one ticket for each reserved seat.</p>
        </div>
        <span>{seats.length} required</span>
      </header>
      <div className="ticket-selection-container">
        {ticketData.map((ticket) => (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            product={ticket.product}
            price={ticket.price}
            seats={seats}
          />
        ))}
      </div>
    </section>
  );
}