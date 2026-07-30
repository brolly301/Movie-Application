import BookingConfirmation from "../components/BookingConfirmation";
import BookingJourney from "../components/SeatingPage/BookingJourney";

export default function BookingConfirmationPage() {
  return (
    <main className="seat-panel-container">
      <BookingJourney />
      <BookingConfirmation />
    </main>
  );
}