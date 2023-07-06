const ComingSoon = require("../models/comingSoon");
const Movie = require("../models/movie");
const Show = require("../models/show");
const Booking = require("../models/booking");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find({}).populate("shows");
  res.send(movies);
};

//need movieID, showID and seatID

exports.editMovies = async (req, res) => {
  const movies = await Movie.findOneAndUpdate(
    {
      title: req.body.title,
      "shows._id": req.body.showID,
    },
    {
      $set: { "shows.$.seats.$[v].reserved": true },
    },
    {
      arrayFilters: [{ "v.seatNumber": { $in: req.body.seatID } }],

      upsert: true,
      new: true,
    }
  );
  res.send("Passed");
};

exports.getComingSoon = async (req, res) => {
  const movies = await ComingSoon.find({});
  res.send(movies);
};

exports.book = async (req, res) => {
  const newBooking = new Booking({ ...req.body });
  await newBooking.save();

  res.send(newBooking);
};
