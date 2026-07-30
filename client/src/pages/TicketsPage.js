import React, { useEffect, useState } from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import TicketSelection from "../components/SeatingPage/Tickets/TicketSelection";
import useTicketContext from "../hooks/useTicketContext";
import ExtraSelection from "../components/SeatingPage/Extras/ExtraSelection";
import useExtraContext from "../hooks/useExtraContext";
import { Navigate } from "react-router-dom";

export default function TicketsPage() {
  const location = useLocation();
  const { movie, show, seats } = location.state ?? {};

  const { ticketData } = useTicketContext();
  const { extraData } = useExtraContext();

  if (!movie || !show || !seats) {
    return <Navigate to="/showtimes" replace />;
  }

  return (
    <div className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <div className="seat-tickets-extras">
          <TicketSelection seats={seats} />
          <ExtraSelection seats={seats} />
        </div>
        <SeatDetails
          tickets={ticketData}
          extras={extraData}
          seats={seats}
          movie={movie}
          show={show}
        />
      </div>
    </div>
  );
}
