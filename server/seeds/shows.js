const date = (days) => {
  const movieDate = new Date();
  movieDate.setDate(movieDate.getDate() + days);
  return movieDate;
};

module.exports = [
  {
    date: date(0),
    startTime: "14.30pm",
  },
  {
    date: date(0),
    startTime: "16.30pm",
  },
  {
    date: date(0),
    startTime: "19.30pm",
  },
  {
    date: date(1),
    startTime: "14.30pm",
  },
  {
    date: date(1),
    startTime: "18.30pm",
  },
  {
    date: date(1),
    startTime: "20.15pm",
  },
  {
    date: date(1),
    startTime: "21.30pm",
  },
  {
    date: date(2),
    startTime: "14.30pm",
  },
  {
    date: date(2),
    startTime: "18.30pm",
  },
  {
    date: date(2),
    startTime: "20.30pm",
  },
  {
    date: date(2),
    startTime: "22.45pm",
  },
  {
    date: date(3),
    startTime: "14.30pm",
  },
  {
    date: date(3),
    startTime: "18.30pm",
  },
  {
    date: date(3),
    startTime: "19.45pm",
  },
  {
    date: date(4),
    startTime: "14.30pm",
  },

  {
    date: date(4),
    startTime: "22.30pm",
  },

  {
    date: date(5),
    startTime: "17.30pm",
  },
  {
    date: date(5),
    startTime: "20.30pm",
  },
  {
    date: date(6),
    startTime: "12.15pm",
  },
  {
    date: date(6),
    startTime: "14.30pm",
  },
  {
    date: date(6),
    startTime: "18.30pm",
  },
  {
    date: date(6),
    startTime: "20.30pm",
  },
];
