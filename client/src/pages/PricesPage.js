import FoodPriceTable from "../components/PricesPage/FoodPriceTable";
import TicketPriceTable from "../components/PricesPage/TicketPriceTable";

export default function PricesPage() {
  return (
    <div>
      <TicketPriceTable />
      <FoodPriceTable />
    </div>
  );
}
