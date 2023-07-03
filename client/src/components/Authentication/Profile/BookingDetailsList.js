import useUserContext from "../../../hooks/useUserContext";
import BookingDetailsShow from "./BookingDetailsShow";

export default function BookingDetailsList({}) {
  const { bookingDetails } = useUserContext();

  const renderedList = bookingDetails.map((booking) => {
    return <BookingDetailsShow booking={booking} />;
  });

  return (
    <div className="booking-details-list">
      <h1>Bookings</h1>
      {renderedList}
    </div>
  );
}
