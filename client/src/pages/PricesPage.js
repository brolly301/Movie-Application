import FoodPriceTable from "../components/PricesPage/FoodPriceTable";
import TicketPriceTable from "../components/PricesPage/TicketPriceTable";
import "../CSS/Prices/Prices.css";

export default function PricesPage() {
  return (
    <main className="prices-page">
      <header className="prices-page-header">
        <h1>Prices</h1>
        <p>Plan your visit with our ticket, snack and drink prices.</p>
      </header>
      <div className="prices-page-container">
        <section className="prices-page-table-container">
          <h2>Tickets</h2>
          <TicketPriceTable />
        </section>
        <section className="prices-page-table-container">
          <h2>Food & drinks</h2>
          <FoodPriceTable />
        </section>
      </div>
      <p className="prices-page-note">
        Valid student ID may be requested. Age restrictions apply to child and
        senior tickets.
      </p>
    </main>
  );
}
