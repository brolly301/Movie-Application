import { useState } from "react";
import useMovieContext from "../../hooks/useMovieContext";
import Dropdown from "../Misc/Dropdown";

export default function MovieSearch() {
  const { movies } = useMovieContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const bookingDate = [
    {
      title: "12th June 2023",
      _id: "12th June 2023",
    },
    {
      title: "13th June 2023",
      _id: "13th June 2023",
    },
    {
      title: "14th June 2023",
      _id: "14th June 2023",
    },
    {
      title: "15th June 2023",
      _id: "15th June 2023",
    },
  ];

  const bookingTime = [
    {
      title: "14:00pm",
      _id: "14:00pm",
    },
    {
      title: "15:45pm",
      _id: "15:45pm",
    },
    {
      title: "18:30pm",
      _id: "18:30pm",
    },
    {
      title: "20:45pm",
      _id: "20:45pm",
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown options={movies} />
        <Dropdown options={bookingDate} />
        <Dropdown options={bookingTime} />
        <button>Book</button>
      </form>
    </div>
  );
}
