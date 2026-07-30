import "../../CSS/HomePage/SpecialOffers.css";
import SpecialOfferHome from "./SpecialOfferHome";
import dateNight from "../../images/specialOffers/dateNight.png";
import kidsClub from "../../images/specialOffers/kidsClub.png";
import studentDeal from "../../images/specialOffers/studentDeal.png";

export default function SpecialOffers() {
  const offers = [
    {
      title: "Date Night",
      image: dateNight,
    },
    {
      title: "Kids Club",
      image: kidsClub,
    },
    {
      title: "Student Deal",
      image: studentDeal,
    },
  ];

  return (
    <div className="special-offers-home-container">
      {offers.map((offer) => (
        <SpecialOfferHome
          key={offer.title}
          title={offer.title}
          image={offer.image}
        />
      ))}
    </div>
  );
}
