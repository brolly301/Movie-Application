import FoodPriceTable from "../components/PricesPage/FoodPriceTable";
import TicketPriceTable from "../components/PricesPage/TicketPriceTable";
import "../CSS/Prices/Prices.css";

export default function PricesPage() {
  return (
    <div>
      <h1 className="prices-title">Prices</h1>
      <div className="prices-page-container">
        <div className="prices-page-table-container">
          <h3 className="prices-table-heading">Tickets</h3>
          <TicketPriceTable />
        </div>
        <div className="prices-page-table-container">
          <h3 className="prices-table-heading">Food & Drinks</h3>
          <FoodPriceTable />
        </div>
      </div>
    </div>
  );
}
