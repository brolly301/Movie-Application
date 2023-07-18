import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import DataCarousel from "./DataCarousel";
import "../../CSS/HorizontalScroll.css";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    "Jun1",
    "June2",
    "June3",
    "June4",
    "June3",
    "June4",
    "June3",
    "June4",
    "June3",
    "June4",
  ];

  const renderedList = data.map((data) => {
    return <DataCarousel data={data} />;
  });

  return (
    <div className="wrapper-container">
      <AiOutlineArrowLeft />
      <span style={{ display: "flex" }}>{renderedList}</span>
      <AiOutlineArrowRight />
    </div>
  );
}
