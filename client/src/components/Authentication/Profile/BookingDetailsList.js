import useUserContext from "../../../hooks/useUserContext";
import BookingDetailsShow from "./BookingDetailsShow";

export default function BookingDetailsList({}) {
  const { bookingDetails } = useUserContext();

  const renderedList = bookingDetails.map((booking) => {
    return <BookingDetailsShow booking={booking} />;
  });

  return <div>{renderedList}</div>;
}
