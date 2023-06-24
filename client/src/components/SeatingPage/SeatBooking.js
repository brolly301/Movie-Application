import { bookMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";

export default function SeatBooking({ movie, show }) {
  const { userData, setUserData } = useUserContext();

  console.log(show);
  const handleBooking = () => {
    bookMovie({
      startTime: show.startTime,
      startDate: show.date,
      movieID: movie._id,
      email: userData.email,
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
    });

    if (userData.user) {
      setUserData({
        ...userData,
        loyaltyPoints: (userData.loyaltyPoints -= 100),
      });
      editUserDetails({ ...userData });
      console.log(userData);
    }
  };

  return (
    <div>
      Seat Bookings
      <button onClick={handleBooking}>Book</button>
      {userData.loyaltyPoints >= 100 && (
        <button onClick={handleFreeBooking}>
          Free Booking (Loyalty Points)
        </button>
      )}
    </div>
  );
}
