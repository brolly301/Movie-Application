import { Link } from "react-router-dom";

export default function SpecialOfferHome({ title, image }) {
  return (
    <Link className="special-offer-home-container" to="/specialOffers">
      <img
        className="special-offers-home-image"
        src={image}
        alt=""
        loading="lazy"
      />
    </Link>
  );
}