import { useLocation } from "react-router-dom";
import { bookMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";

export default function SeatBooking({ movie }) {
  const { userData, setUserData } = useUserContext();

  const handleBooking = () => {
    bookMovie({
      startTime: "Now",
      startDate: "11th",
      movieID: movie._id,
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
      startTime: "Now",
      startDate: "11th",
      movieID: movie._id,
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
