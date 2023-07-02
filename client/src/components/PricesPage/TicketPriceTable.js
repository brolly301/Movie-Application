export default function TicketPriceTable() {
  return (
    <div className="prices-table-container">
      <table>
        <tr>
          <th>Ticket</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Children (Under 12)</td>
          <td>Standard</td>
          <td>£6.00</td>
        </tr>
        <tr>
          <td>Students (Valid ID)</td>
          <td>Standard</td>
          <td>£7.50</td>
        </tr>
        <tr>
          <td>Adult</td>
          <td>Standard</td>
          <td>£9.00</td>
        </tr>
        <tr>
          <td>Seniors (60 & over)</td>
          <td>Standard</td>
          <td>£7.50</td>
        </tr>
        <tr>
          <td>Children (Under 12)</td>
          <td>Premium</td>
          <td>£8.00</td>
        </tr>
        <tr>
          <td>Students (Valid ID)</td>
          <td>Premium</td>
          <td>£9</td>
        </tr>
        <tr>
          <td>Adult</td>
          <td>Premium</td>
          <td>£11.00</td>
        </tr>
        <tr>
          <td>Seniors (60 & over)</td>
          <td>Premium</td>
          <td>£9.00</td>
        </tr>
        <tr>
          <td>Family Package (2 Adults, 2 Children)</td>
          <td>Standard</td>
          <td>£27.00</td>
        </tr>
        <tr>
          <td>Family Package (2 Adults, 2 Children)</td>
          <td>Premium</td>
          <td>£35.00</td>
        </tr>
      </table>
    </div>
  );
}
