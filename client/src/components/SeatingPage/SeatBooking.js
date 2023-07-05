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
      title: "Inception",
      showID: "64a59dfff8dcfe09e624bf23",
      seatID: "64a59dfff8dcfe09e624bf26",
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
