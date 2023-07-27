import React from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import TicketSelection from "../components/SeatingPage/Tickets/TicketSelection";

export default function TicketsPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;
  const seats = location.state.seats;

  return (
    <div className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <TicketSelection seats={seats} />
        <SeatDetails seats={seats} movie={movie} show={show} />
      </div>
    </div>
  );
}
