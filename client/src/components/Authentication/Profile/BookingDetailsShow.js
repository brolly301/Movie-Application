import { deleteBooking } from "../../../APIs/profile";
import "../../../CSS/Authentication/BookingDetails.css";
import { toast } from "react-toastify";

export default function BookingDetailsShow({ booking }) {
  const handleClick = () => {
    deleteBooking(booking._id);
    toast.success("Booking successfully cancelled.");
  };

  return (
    <div className="booking-details-container">
      <img src={booking.movieID.poster} alt="" />

      <div className="booking-details-times-container">
        <h3>{booking.movieID.title}</h3>
        <div className="booking-details-date-time">
          <div className="booking-details-date">
            <h4>Date:</h4>
            <h4>{booking.startDate.substring(0, 15)}</h4>
          </div>
          <div className="booking-details-time">
            <h4>Time:</h4>
            <h4>{booking.startTime}</h4>
          </div>
        </div>
        <button onClick={handleClick} className="booking-cancel-button">
          Cancel
        </button>
      </div>

      <div className="movie-showtimes-container"></div>
    </div>
  );
}
