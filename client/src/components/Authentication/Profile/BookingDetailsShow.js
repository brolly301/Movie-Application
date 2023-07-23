import { useState } from "react";
import { deleteBooking } from "../../../APIs/profile";
import "../../../CSS/Authentication/BookingDetails.css";
import { toast } from "react-toastify";

export default function BookingDetailsShow({ booking }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    deleteBooking(booking._id);
    toast.success("Booking successfully cancelled.");
  };

  console.log(booking);

  return (
    <div className="booking-details-container">
      <img
        className="booking-details-image"
        src={booking.movieID.poster}
        alt=""
      />
      <div className="booking-details-hidden">
        <h3 className="booking-details-title-hidden">
          {booking.movieID.title}
          <img
            className="booking-title-icon"
            src={booking.movieID.rated}
            alt=""
          />
        </h3>
        <img
          className="booking-details-image-hidden"
          src={booking.movieID.poster}
          alt=""
        />

        <div className="booking-details-times-container">
          <h3 className="booking-details-title">
            {booking.movieID.title}
            <img
              className="booking-title-icon"
              src={booking.movieID.rated}
              alt=""
            />
          </h3>
          <div className="booking-details-date-time">
            <div className="booking-details-date">
              <h4>Date:</h4>
              <h4>{booking.startDate.substring(0, 15)}</h4>
            </div>
            <div className="booking-details-time">
              <h4>Time:</h4>
              <h4>{booking.startTime}</h4>
            </div>
            <div className="booking-details-time">
              <h4>Seats:</h4>
              <h4>{booking.seatNumber?.map((seat) => `${seat} `)}</h4>
            </div>
          </div>
          <button onClick={handleClick} className="booking-cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
