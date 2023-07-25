import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShowtimesPage from "./pages/ShowtimesPage";
import MoviePage from "./pages/MoviePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import SpecialOffersPage from "./pages/SpecialOffersPage";
import PricesPage from "./pages/PricesPage";
import ComingSoonShowPage from "./pages/ComingSoonShowPage";
import ProfilePage from "./pages/ProfilePage";
import SeatingPage from "./pages/SeatingPage";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import LoyaltyPage from "./pages/LoyaltyPage";
import BookingConfirmation from "./pages/BookingConfirmationPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/register" index element={<RegisterPage />} />
        <Route path="/contactUs" index element={<ContactUs />} />
        <Route path="/account" index element={<ProfilePage />} />
        <Route path="/prices" index element={<PricesPage />} />
        <Route path="/specialOffers" index element={<SpecialOffersPage />} />
        <Route path="/loyalty" index element={<LoyaltyPage />} />
        <Route path="/comingSoon" index element={<ComingSoonPage />} />
        <Route path="/comingSoon/:id" index element={<ComingSoonShowPage />} />
        <Route path="/showtimes" index element={<ShowtimesPage />} />
        <Route path="/showtimes/:id" index element={<MoviePage />} />
        <Route path="/showtimes/:id/seating" index element={<SeatingPage />} />
        <Route
          path="/showtimes/:id/confirmation"
          index
          element={<BookingConfirmation />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
