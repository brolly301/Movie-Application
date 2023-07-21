import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import BookingDetailsShow from "./BookingDetailsShow";

export default function BookingDetailsList({}) {
  const { bookingDetails } = useUserContext();

  console.log(bookingDetails);

  const renderedList = bookingDetails.map((booking) => {
    return <BookingDetailsShow booking={booking} />;
  });

  return (
    <div className="booking-details-list">
      <h1>Bookings</h1>
      {bookingDetails.length > 0 ? (
        renderedList
      ) : (
        <>
          <div className="no-bookings-text">
            You currently have no bookings.
          </div>
          <Link className="button-link" to={"/showtimes"}>
            <button className="no-bookings-button">Book Now</button>
          </Link>
        </>
      )}
    </div>
  );
}
