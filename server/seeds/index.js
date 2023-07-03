const mongoose = require("mongoose");
const movies = require("./movies");
const shows = require("./shows");
const comingSoon = require("./comingSoon");
const Movie = require("../models/movie");
const Show = require("../models/show");
const ComingSoon = require("../models/comingSoon");
const Bookings = require("../models/booking");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not connected" + err);
  });

const seedDatabase = async () => {
  await Movie.deleteMany({});
  await ComingSoon.deleteMany({});
  await Bookings.deleteMany({});
  await Movie.insertMany(movies);
  await ComingSoon.insertMany(comingSoon);

  //Figure out how to insert shows into movies based off their title
};

seedDatabase().then(() => {
  mongoose.connection.close();
});
