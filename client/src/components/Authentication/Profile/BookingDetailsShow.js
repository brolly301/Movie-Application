import { useState } from "react";
import { toast } from "react-toastify";
import { deleteBooking } from "../../../APIs/profile";
import useUserContext from "../../../hooks/useUserContext";
import "../../../CSS/Authentication/BookingDetails.css";

export default function BookingDetailsShow({ booking }) {
  const { setBookingDetails } = useUserContext();
  const [isCancelling, setIsCancelling] = useState(false);

  const movie = booking.movieID;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(booking.startDate));

  const handleCancel = async () => {
    const confirmed = window.confirm(
      `Cancel your booking for ${movie?.title || "this film"}?`,
    );

    if (!confirmed) {
      return;
    }
    setIsCancelling(true);

    try {
      const res = await deleteBooking(booking._id);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      setBookingDetails((current) =>
        current.filter((item) => item._id !== booking._id),
      );

      toast.success("Booking cancelled and seats released.");
    } catch (error) {
      toast.error("Your booking could not be cancelled.");
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <article className="booking-details-container">
      {movie?.poster && (
        <img
          className="booking-details-image"
          src={movie.poster}
          alt={`${movie.title} poster`}
        />
      )}
      <div className="booking-details-content">
        <header className="booking-details-header">
          <div>
            <h3>{movie?.title || "Film unavailable"}</h3>
            <span>#{booking._id.slice(-8).toUpperCase()}</span>
          </div>
          {movie?.rated && (
            <img
              className="booking-title-icon"
              src={movie.rated}
              alt={`${movie.title} age rating`}
            />
          )}
        </header>
        <dl className="booking-details-meta">
          <div>
            <dt>Date</dt>
            <dd>{formattedDate}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{booking.startTime}</dd>
          </div>
          <div>
            <dt>Seats</dt>
            <dd>{booking.seatNumber?.join(", ") || "None"}</dd>
          </div>
        </dl>
        <button
          type="button"
          className="booking-cancel-button"
          disabled={isCancelling}
          onClick={handleCancel}
        >
          {isCancelling ? "Cancelling..." : "Cancel booking"}
        </button>
      </div>
    </article>
  );
}
