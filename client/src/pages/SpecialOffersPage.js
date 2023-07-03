import SpecialOffersList from "../components/SpecialOffersPage/SpecialOffersList";
import "../CSS/SpecialOffers/SpecialOffers.css";

export default function SpecialOffersPage() {
  return (
    <div className="special-offers-page-container">
      <h1>Special Offers</h1>
      <h2 className="special-offers-heading">
        Explore Our Current special offers and deals
      </h2>
      <SpecialOffersList />
    </div>
  );
}
