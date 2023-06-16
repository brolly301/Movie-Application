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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/register" index element={<RegisterPage />} />
        <Route path="/prices" index element={<PricesPage />} />
        <Route path="/specialOffers" index element={<SpecialOffersPage />} />
        <Route path="/comingSoon" index element={<ComingSoonPage />} />
        <Route path="/showtimes" index element={<ShowtimesPage />} />
        <Route path="/showtimes/:id" index element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
