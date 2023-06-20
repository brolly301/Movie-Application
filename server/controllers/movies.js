const ComingSoon = require("../models/comingSoon");
const Movie = require("../models/movie");
const Show = require("../models/show");
const Booking = require("../models/booking");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find({}).populate("shows");
  res.send(movies);
};

exports.getComingSoon = async (req, res) => {
  const movies = await ComingSoon.find({});
  res.send(movies);
};

exports.getShows = async (req, res) => {
  const shows = await Show.find({});
  res.send(shows);
};

exports.book = async (req, res) => {
  const newBooking = new Booking({ ...req.body });
  await newBooking.save();

  res.send(newBooking);
};
