const Movie = require("../models/movie");
const Show = require("../models/show");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
};

exports.getShows = async (req, res) => {
  const shows = await Show.find({});
  res.send(shows);
};
