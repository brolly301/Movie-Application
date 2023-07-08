import { bookMovie, editMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";

export default function SeatBooking({ movie, show, seats }) {
  const { userData, setUserData } = useUserContext();
  //need to store seatNumber in booking model and document
  //need to update the movieModel so that reserved is updated to true
  //need to update the state of reserved seats to red

  const handleBooking = () => {
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
        loyaltyPoints: (userData.loyaltyPoints += 20),
      });
      editUserDetails({ ...userData });
    }
  };

  const handleFreeBooking = () => {
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
  };

  return (
    <div>
      <button className="seat-booking-button" onClick={handleBooking}>
        Book
      </button>
      {userData.loyaltyPoints >= 100 && (
        <button onClick={handleFreeBooking}>
          Free Booking (Loyalty Points)
        </button>
      )}
    </div>
  );
}
