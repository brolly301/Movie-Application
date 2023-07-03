import React from "react";
import SpecialOffer from "./SpecialOffer";
import "../../CSS/SpecialOffers/SpecialOffersList.css";

const SpecialOffersList = () => {
  const detailsList = [
    {
      details:
        "Our Date Night Delight package offers two movie tickets, a large popcorn to share, and two drinks of your choice—all at a discounted price. Enjoy a cozy and unforgettable movie experience with your loved one.",
      image:
        "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
      details:
        " Treat the whole family to a movie night out with our Family Fun Pack. Get discounted tickets for a group of four or more, along with a complimentary popcorn and soda combo for each family member.",
      image:
        "https://images.pexels.com/photos/10528991/pexels-photo-10528991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      details:
        "Enjoy unlimited movies all day long! Pay a flat fee and watch as many movies as you like from our current lineup. Grab some popcorn, sit back, and indulge in a cinematic marathon.",
      image:
        "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      details:
        "Flash your valid student ID at the ticket counter and avail of a special discounted ticket price exclusively for students. Catch the latest blockbusters without breaking the bank.",
      image:
        "https://images.pexels.com/photos/8261557/pexels-photo-8261557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      details:
        "Visit us during our happy hour and enjoy discounted tickets on select movies. Combine it with our discounted concession items, and you've got the perfect recipe for a budget-friendly cinema outing.",
      image:
        "https://images.unsplash.com/photo-1629667644917-6a2789dedfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      details:
        "Enjoy unbeatable value with our combo deals. Choose from a variety of combos that include a movie ticket, popcorn, and a beverage—all bundled together at a discounted price.",
      image:
        "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="special-offers-list-container">
      <SpecialOffer
        image={detailsList[0].image}
        details={detailsList[0].details}>
        Date Night Delight
      </SpecialOffer>
      <SpecialOffer
        image={detailsList[1].image}
        details={detailsList[1].details}>
        Family Fun Pack
      </SpecialOffer>
      <SpecialOffer
        image={detailsList[2].image}
        details={detailsList[2].details}>
        Movie Marathon Madness
      </SpecialOffer>
      <SpecialOffer
        image={detailsList[3].image}
        details={detailsList[3].details}>
        Student Discount
      </SpecialOffer>
      <SpecialOffer
        image={detailsList[4].image}
        details={detailsList[4].details}>
        Happy Hour Happiness
      </SpecialOffer>
      <SpecialOffer
        image={detailsList[5].image}
        details={detailsList[5].details}>
        Combo Deals
      </SpecialOffer>
    </div>
  );
};

export default SpecialOffersList;
