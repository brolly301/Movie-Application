import { bookMovie, editMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";

export default function SeatBooking({ movie, show, seats, tickets, extras }) {
  const { userData, setUserData } = useUserContext();
  const { totalTickets, setTicketData } = useTicketContext();
  const redirect = useNavigate();

  const handleRedirect = () => {
    if (seats < 1) {
      toast.error("Please choose a seat before proceeding.");
    } else {
      redirect(`/showtimes/${movie._id}/tickets`, {
        state: { movie: movie, show: show, seats: seats },
      });
    }
  };

  const handleBooking = () => {
    if (totalTickets !== seats.length) {
      toast.error(
        `Please choose another ${seats.length - tickets.length} tickets`
      );
    } else {
      //This needs fixed for quick book, to do with updating bookMovie and editMovie
      //Look at whats being passed through before book is pressed for movietimes and
      //movie search components, but it will all be on seat details
      bookMovie({
        startTime: show.startTime,
        startDate: show.date,
        movieID: movie._id,
        email: userData.email,
        seatNumber: seats,
        tickets: tickets,
        extras: extras,
      });
      editMovie({
        title: movie.title,
        showID: show._id,
        seatID: seats,
      });

      if (userData.user) {
        setUserData({
          ...userData,
          loyaltyPoints: (userData.loyaltyPoints += 20),
        });
        editUserDetails({ ...userData });
      }
      toast("Booking confirmed. Check your account for booking details.");
      redirect(`/showtimes/${movie._id}/confirmation`, {
        state: {
          movie: movie,
          show: show,
          seats: seats,
          tickets: tickets,
          extras: extras,
          totalTickets: totalTickets,
        },
      });
      setTicketData([]);
    }
  };

  const handleFreeBooking = () => {
    if (seats < 1) {
      toast.error("Please choose a seat before proceeding.");
    } else {
      bookMovie({
        startTime: show.startTime,
        startDate: show.date,
        movieID: movie._id,
        email: userData.email,
        seatNumber: seats,
      });
      editMovie({
        title: movie.title,
        showID: show._id,
        seatID: seats,
      });

      if (userData.user) {
        setUserData({
          ...userData,
          loyaltyPoints: (userData.loyaltyPoints -= 100),
        });
        editUserDetails({ ...userData });
      }
      toast("Free Booking confirmed. Check your account for booking details.");
    }
  };

  return (
    <div className="seat-booking-container">
      <button
        className="seat-booking-button"
        onClick={
          document.URL.includes("tickets") ? handleBooking : handleRedirect
        }
      >
        Book
      </button>
      {userData.loyaltyPoints >= 100 && (
        <button className="seat-freeBooking-button" onClick={handleFreeBooking}>
          Free Booking (Loyalty)
        </button>
      )}
    </div>
  );
}
