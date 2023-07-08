const date = (days) => {
  const movieDate = new Date();
  movieDate.setDate(movieDate.getDate() + days);
  return movieDate;
};

const seats = require("./seating");

module.exports = [
  {
    date: date(0),
    startTime: "14.30pm",
    seats: seats,
  },
  {
    date: date(0),
    startTime: "16.30pm",
    seats: seats,
  },
  {
    date: date(0),
    startTime: "19.30pm",
    seats: seats,
  },
  {
    date: date(1),
    startTime: "14.30pm",
    seats: seats,
  },
  {
    date: date(1),
    startTime: "18.30pm",
    seats: seats,
  },
  {
    date: date(1),
    startTime: "20.15pm",
    seats: seats,
  },
  {
    date: date(1),
    startTime: "21.30pm",
    seats: seats,
  },
  {
    date: date(2),
    startTime: "14.30pm",
    seats: seats,
  },
  {
    date: date(2),
    startTime: "18.30pm",
    seats: seats,
  },
  {
    date: date(2),
    startTime: "20.30pm",
    seats: seats,
  },
  {
    date: date(2),
    startTime: "22.45pm",
    seats: seats,
  },
  {
    date: date(3),
    startTime: "14.30pm",
    seats: seats,
  },
  {
    date: date(3),
    startTime: "18.30pm",
    seats: seats,
  },
  {
    date: date(3),
    startTime: "19.45pm",
    seats: seats,
  },
  {
    date: date(4),
    startTime: "14.30pm",
    seats: seats,
  },

  {
    date: date(4),
    startTime: "22.30pm",
    seats: seats,
  },

  {
    date: date(5),
    startTime: "17.30pm",
    seats: seats,
  },
  {
    date: date(5),
    startTime: "20.30pm",
    seats: seats,
  },
  {
    date: date(6),
    startTime: "12.15pm",
    seats: seats,
  },
  {
    date: date(6),
    startTime: "14.30pm",
    seats: seats,
  },
  {
    date: date(6),
    startTime: "18.30pm",
    seats: seats,
  },
  {
    date: date(6),
    startTime: "20.30pm",
    seats: seats,
  },
];
