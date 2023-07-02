import FoodPriceTable from "../components/PricesPage/FoodPriceTable";
import TicketPriceTable from "../components/PricesPage/TicketPriceTable";
import "../CSS/Prices/Prices.css";

export default function PricesPage() {
  return (
    <div className="prices-page-container">
      <h1 className="prices-title">Prices</h1>
      <TicketPriceTable />
      <FoodPriceTable />
    </div>
  );
}
