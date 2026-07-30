import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import BookingDetailsShow from "./BookingDetailsShow";

export default function BookingDetailsList({}) {
  const { bookingDetails } = useUserContext();
  const bookings = Array.isArray(bookingDetails) ? bookingDetails : [];

  const renderedList = bookingDetails.map((booking) => {
    return <BookingDetailsShow booking={booking} />;
  });

  return (
    <div className="booking-details-list">
      <header className="profile-section-header">
        <div>
          <h2>Your bookings</h2>
          <p>View and manage your upcoming cinema visits.</p>
        </div>
      </header>

      {bookings.length > 0 ? (
        <div className="booking-details-grid">
          {bookings.map((booking) => (
            <BookingDetailsShow key={booking._id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="no-bookings">
          <h3>No bookings yet</h3>
          <p>Your upcoming cinema bookings will appear here.</p>
          <Link className="no-bookings-button" to="/showtimes">
            Browse showtimes
          </Link>
        </div>
      )}
    </div>
  );
}
