import Extra from "./Extra";
import "../../../CSS/Seating/Tickets/TicketSelection.css";

const extraData = [
  { id: 1, product: "Regular Popcorn", price: 4.99 },
  { id: 2, product: "Large Popcorn", price: 5.99 },
  { id: 3, product: "Regular Soft Drink", price: 2.99 },
  { id: 4, product: "Large Soft Drink", price: 3.99 },
  { id: 5, product: "M&Ms", price: 2.99 },
  { id: 6, product: "Dairy Milk", price: 2.99 },
  { id: 7, product: "Maltesers", price: 2.99 },
  { id: 8, product: "Pick & Mix Small", price: 1.49 },
  { id: 9, product: "Pick & Mix Medium", price: 2.69 },
  { id: 10, product: "Pick & Mix Large", price: 3.99 },
];

export default function ExtraSelection() {
  return (
    <section className="ticket-selection-main">
      <header className="ticket-selection-header">
        <div>
          <h2>Add extras</h2>
          <p>Snacks and drinks are optional.</p>
        </div>
      </header>
      <div className="ticket-selection-container">
        {extraData.map((extra) => (
          <Extra
            key={extra.id}
            id={extra.id}
            product={extra.product}
            price={extra.price}
          />
        ))}
      </div>
    </section>
  );
}