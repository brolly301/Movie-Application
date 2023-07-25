import React from "react";
import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div>
      <h1>Ticket Booking Confirmation</h1>
      <p>
        Thank you for choosing [Your Movie Booking Application/Website] for your
        movie night! We are delighted to confirm your booking details. Your love
        for movies is about to be rewarded with an incredible cinematic
        experience.
      </p>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt="" />
      <p>Movie Time / Date</p>
      <p>Screen Number</p>
      <p>Seat Number</p>
      <p>Booking ID</p>
      <p>Price</p>
      <p>
        Instructions: Please arrive at the cinema hall at least 15 minutes
        before the showtime to avoid any inconvenience. In case of any changes
        or cancellations, please contact our customer support at [Customer
        Support Contact Details] at least 2 hours before the showtime. Your
        booking is non-transferable and non-refundable within 2 hours of the
        showtime. We recommend that you keep this confirmation handy on your
        mobile device or print a copy to present at the cinema counter.
      </p>
      <p>
        Enjoy the Show! We hope you have an amazing time watching "[Movie
        Title]" at our cinema. If you have any questions or need further
        assistance, feel free to reach out to us anytime. Thank you for choosing
        [Your Movie Booking Application/Website]. We look forward to serving you
        again! Best regards, The [Your Movie Booking Application/Website] Team
        [Your Movie Booking Application/Website Contact Information]
      </p>
      <button>Back to Homepage</button>
    </div>
  );
}
