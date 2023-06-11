const Movie = require("../models/movie");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
};
