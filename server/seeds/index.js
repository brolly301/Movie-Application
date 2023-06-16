const mongoose = require("mongoose");
const movies = require("./movies");
const shows = require("./shows");
const Movie = require("../models/movie");
const Show = require("../models/show");
const movie = require("../models/movie");
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
  await Show.deleteMany({});
  await Show.insertMany(shows);
  await Movie.insertMany(movies);

  //Figure out how to insert shows into movies based off their title
};

seedDatabase().then(() => {
  mongoose.connection.close();
});
