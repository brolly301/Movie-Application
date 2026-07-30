const ticketPrices = [
  { ticket: "Child (under 12)", category: "Standard", price: 6 },
  { ticket: "Student", category: "Standard", price: 7.5 },
  { ticket: "Adult", category: "Standard", price: 9 },
  { ticket: "Senior (60+)", category: "Standard", price: 7.5 },
  { ticket: "Child (under 12)", category: "Premium", price: 8 },
  { ticket: "Student", category: "Premium", price: 9 },
  { ticket: "Adult", category: "Premium", price: 11 },
  { ticket: "Senior (60+)", category: "Premium", price: 9 },
  { ticket: "Family of four", category: "Standard", price: 27 },
  { ticket: "Family of four", category: "Premium", price: 35 },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

export default function TicketPriceTable() {
  return (
    <div className="prices-table-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Ticket</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {ticketPrices.map((ticket) => (
            <tr key={`${ticket.ticket}-${ticket.category}`}>
              <td>{ticket.ticket}</td>
              <td>{ticket.category}</td>
              <td>{formatPrice(ticket.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
