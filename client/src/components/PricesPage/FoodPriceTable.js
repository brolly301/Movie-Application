const foodPrices = [
  { item: "Regular popcorn", category: "Snacks", price: 4.99 },
  { item: "Large popcorn", category: "Snacks", price: 5.99 },
  { item: "Regular soft drink", category: "Drinks", price: 2.99 },
  { item: "Large soft drink", category: "Drinks", price: 3.99 },
  { item: "M&Ms", category: "Chocolate", price: 2.99 },
  { item: "Dairy Milk", category: "Chocolate", price: 2.99 },
  { item: "Maltesers", category: "Chocolate", price: 2.99 },
  { item: "Pick & Mix Small", category: "Sweets", price: 1.49 },
  { item: "Pick & Mix Medium", category: "Sweets", price: 2.69 },
  { item: "Pick & Mix Large", category: "Sweets", price: 3.99 },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

export default function FoodPriceTable() {
  return (
    <div className="prices-table-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {foodPrices.map((item) => (
            <tr key={item.item}>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td>{formatPrice(item.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
