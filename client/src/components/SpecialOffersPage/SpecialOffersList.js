import SpecialOffer from "./SpecialOffer";
import dateNight from "../../images/specialOffers/dateNight.png";
import kidsClub from "../../images/specialOffers/kidsClub.png";
import studentDeal from "../../images/specialOffers/studentDeal.png";
import midweek from "../../images/specialOffers/midweek.png";
import vip from "../../images/specialOffers/vip.png";
import family from "../../images/specialOffers/family.png";
import "../../CSS/SpecialOffers/SpecialOffersList.css";

const offers = [
  {
    title: "Date Night",
    image: dateNight,
    price: "£20",
    details:
      "Enjoy two recliner seats, a shared popcorn and two drinks for one fixed price.",
    availability: "Thursdays after 6pm",
  },
  {
    title: "Kids Club",
    image: kidsClub,
    price: "From £3.50",
    details:
      "Family-friendly screenings with reduced-price tickets for younger film fans.",
    availability: "Saturday and Sunday mornings",
  },
  {
    title: "Student Deal",
    image: studentDeal,
    price: "2 for £12",
    details:
      "Two cinema tickets at a reduced student price. Valid student identification is required.",
    availability: "Every Tuesday",
  },
  {
    title: "Midweek Deal",
    image: midweek,
    price: "Midweek offer",
    details:
      "Make a weekday cinema trip for less with reduced prices on selected screenings.",
    availability: "Selected midweek screenings",
  },
  {
    title: "VIP Experience",
    image: vip,
    price: "Premium upgrade",
    details:
      "Upgrade your visit with premium seating and a more comfortable cinema experience.",
    availability: "Selected films and screenings",
  },
  {
    title: "Family Deal",
    image: family,
    price: "Family value",
    details:
      "Bring the family together with a bundled cinema offer designed for adults and children.",
    availability: "Selected family screenings",
  },
];

export default function SpecialOffersList() {
  return (
    <div className="special-offers-list-container">
      {offers.map((offer) => (
        <SpecialOffer key={offer.title} offer={offer} />
      ))}
    </div>
  );
}
