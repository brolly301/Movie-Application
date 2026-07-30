import { bookMovie, editMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";
import useExtraContext from "../../hooks/useExtraContext";

export default function SeatBooking({ movie, show, seats, tickets, extras }) {
  const { userData, setUserData } = useUserContext();
  const { totalTickets, setTicketData } = useTicketContext();
  const { setExtraData } = useExtraContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isTicketPage = pathname.includes("/tickets");

  const handleRedirect = () => {
    if (seats.length === 0) {
      toast.error("Please choose a seat before proceeding.");
    } else {
      navigate(`/showtimes/${movie._id}/tickets`, {
        state: { movie: movie, show: show, seats: seats },
      });
    }
  };

  const handleBooking = async () => {
    if (totalTickets !== seats.length) {
      const remainingTickets = seats.length - totalTickets;

      toast.error(
        `Please choose ${remainingTickets} more ${
          remainingTickets === 1 ? "ticket" : "tickets"
        }.`,
      );

      return;
    }

    try {
      const booking = await bookMovie({
        startTime: show.startTime,
        startDate: show.date,
        movieID: movie._id,
        email: userData.email,
        seatNumber: seats,
        tickets,
        extras,
      });

      await editMovie({
        title: movie.title,
        showID: show._id,
        seatID: seats,
      });

      if (userData.user) {
        const updatedUserData = {
          ...userData,
          loyaltyPoints: Number(userData.loyaltyPoints) + 20,
        };

        setUserData(updatedUserData);
        await editUserDetails(updatedUserData);
      }

      navigate(`/showtimes/${movie._id}/confirmation`, {
        state: {
          bookingId: booking._id,
          movie,
          show,
          seats,
          tickets,
          extras,
          totalTickets,
        },
      });

      setTicketData([]);
      setExtraData([]);
      toast.success("Booking confirmed.");
    } catch (error) {
      toast.error("Your booking could not be completed. Please try again.");
    }
  };

  const handleFreeBooking = async () => {
    if (seats.length !== 1) {
      toast.error("Select exactly one seat to use a free loyalty ticket.");
      return;
    }

    try {
      const booking = await bookMovie({
        startTime: show.startTime,
        startDate: show.date,
        movieID: movie._id,
        email: userData.email,
        seatNumber: seats,
        tickets: [],
        extras: [],
      });

      await editMovie({
        title: movie.title,
        showID: show._id,
        seatID: seats,
      });

      const updatedUserData = {
        ...userData,
        loyaltyPoints: Number(userData.loyaltyPoints) - 100,
      };

      setUserData(updatedUserData);
      await editUserDetails(updatedUserData);

      navigate(`/showtimes/${movie._id}/confirmation`, {
        state: {
          bookingId: booking._id,
          movie,
          show,
          seats,
          tickets: [],
          extras: [],
          totalTickets: 1,
        },
      });

      setTicketData([]);
      setExtraData([]);
      toast.success("Free loyalty ticket booked.");
    } catch (error) {
      toast.error("Your loyalty booking could not be completed.");
    }
  };

  return (
    <div className="seat-booking-container">
      <button
        className="seat-booking-button"
        onClick={isTicketPage ? handleBooking : handleRedirect}
      >
        {isTicketPage ? "Confirm booking" : "Continue"}
      </button>
      {!isTicketPage && Number(userData.loyaltyPoints) >= 100 && (
        <button className="seat-freeBooking-button" onClick={handleFreeBooking}>
          Use free loyalty ticket
        </button>
      )}
    </div>
  );
}
