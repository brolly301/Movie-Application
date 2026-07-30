import SpecialOffersList from "../components/SpecialOffersPage/SpecialOffersList";
import "../CSS/SpecialOffers/SpecialOffers.css";

export default function SpecialOffersPage() {
  return (
   <main className="special-offers-page-container">
      <header className="special-offers-page-header">
        <h1>Special offers</h1>
        <p>Make more of your next visit with our latest cinema deals.</p>
      </header>
      <SpecialOffersList />
      <p className="special-offers-note">
        Offers are subject to availability and cannot be used with another
        promotion.
      </p>
    </main>
  );
}
