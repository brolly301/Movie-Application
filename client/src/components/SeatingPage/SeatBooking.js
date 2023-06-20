import { useLocation } from "react-router-dom";
import { bookMovie } from "../../APIs/movies";
import useUserContext from "../../hooks/useUserContext";
import { editUserDetails } from "../../APIs/profile";

export default function SeatBooking({ movie }) {
  const { userData, setUserData } = useUserContext();

  const handleClick = () => {
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

  return (
    <div>
      Seat Bookings
      <button onClick={handleClick}>Book</button>
      <button>Free Booking (Loyalty Points)</button>
    </div>
  );
}
