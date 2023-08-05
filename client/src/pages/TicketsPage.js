import React, { useEffect, useState } from "react";
import BookingJourney from "../components/SeatingPage/BookingJourney";
import SeatDetails from "../components/SeatingPage/SeatDetails";
import { useLocation } from "react-router-dom";
import TicketSelection from "../components/SeatingPage/Tickets/TicketSelection";
import useTicketContext from "../hooks/useTicketContext";
import ExtraSelection from "../components/SeatingPage/Extras/ExtraSelection";
import useExtraContext from "../hooks/useExtraContext";
import { useWindowSize } from "@uidotdev/usehooks";

export default function TicketsPage() {
  const location = useLocation();
  const movie = location.state.movie;
  const show = location.state.show;
  const seats = location.state.seats;

  const size = useWindowSize();

  const { ticketData } = useTicketContext();
  const { extraData } = useExtraContext();

  console.log(extraData);

  return (
    <div className="seat-panel-container">
      <BookingJourney />
      <div className="seat-panel-flex">
        <div className="seat-tickets-extras">
          <TicketSelection seats={seats} />
          <ExtraSelection seats={seats} />
          {size.width <= 900 ? (
            <SeatDetails
              tickets={ticketData}
              extras={extraData}
              seats={seats}
              movie={movie}
              show={show}
            />
          ) : (
            " "
          )}
        </div>
        {size.width >= 900 ? (
          <SeatDetails
            tickets={ticketData}
            extras={extraData}
            seats={seats}
            movie={movie}
            show={show}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
