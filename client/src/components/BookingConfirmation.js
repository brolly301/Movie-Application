import { Link, Navigate, useLocation } from "react-router-dom";
import "../CSS/Seating/BookingConfirmation.css";

export default function BookingConfirmation() {
  const location = useLocation();
  const {
    bookingId,
    movie,
    show,
    seats,
    tickets = [],
    extras = [],
  } = location.state ?? {};

  if (!bookingId || !movie || !show || !seats) {
    return <Navigate to="/showtimes" replace />;
  }

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(show.date));

  const ticketTotal = tickets.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0
  );

  const extrasTotal = extras.reduce(
    (total, extra) => total + extra.price * extra.quantity,
    0
  );

  const bookingTotal = ticketTotal + extrasTotal;
  const bookingReference = bookingId.slice(-8).toUpperCase();

  return (
    <section className="booking-confirmation-container">
      <header className="booking-confirmation-header">
        <span className="booking-confirmation-tick">✓</span>
        <h1>Booking confirmed</h1>
        <p>Your seats are reserved. We’ll see you at the movies.</p>
      </header>

      <div className="booking-confirmation-card">
        <div className="booking-confirmation-card-header">
          <div>
            <span>Booking reference</span>
            <strong>#{bookingReference}</strong>
          </div>

          <div>
            <span>Date and time</span>
            <strong>
              {formattedDate} · {show.startTime}
            </strong>
          </div>
        </div>

        <div className="booking-confirmation-content">
          <img
            className="booking-confirmation-poster"
            src={movie.poster}
            alt={`${movie.title} poster`}
          />

          <div className="booking-confirmation-details">
            <h2>{movie.title}</h2>

            <dl className="booking-confirmation-summary">
              <div>
                <dt>Seats</dt>
                <dd>{seats.join(", ")}</dd>
              </div>

              <div>
                <dt>Tickets</dt>
                <dd>
                  {tickets.length > 0
                    ? tickets.map((ticket) => (
                        <span key={ticket.id}>
                          {ticket.quantity} × {ticket.product}
                        </span>
                      ))
                    : "Loyalty booking"}
                </dd>
              </div>

              <div>
                <dt>Extras</dt>
                <dd>
                  {extras.length > 0
                    ? extras.map((extra) => (
                        <span key={extra.id}>
                          {extra.quantity} × {extra.product}
                        </span>
                      ))
                    : "None"}
                </dd>
              </div>

              <div>
                <dt>Total paid</dt>
                <dd className="booking-confirmation-total">
                  £{bookingTotal.toFixed(2)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="booking-confirmation-instructions">
        <h2>Before you arrive</h2>
        <p>
          Please arrive at least 15 minutes before the advertised start time.
          Keep your booking reference handy when you enter the cinema.
        </p>
      </div>

      <Link to="/" className="booking-confirmation-button">
        Back to homepage
      </Link>
    </section>
  );
}