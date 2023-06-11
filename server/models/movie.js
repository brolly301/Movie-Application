const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
  },
  year: {
    type: String,
  },
  rated: {
    type: String,
  },
  released: {
    type: String,
  },
  runtime: {
    type: String,
  },
  genre: {
    type: String,
  },
  director: {
    type: String,
  },
  writer: {
    type: String,
  },
  actors: {
    type: String,
  },
  plot: {
    type: String,
  },
  country: {
    type: String,
  },
  awards: {
    type: String,
  },
  poster: {
    type: String,
  },
  imdbRating: {
    type: String,
  },
  imdbPoster: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
