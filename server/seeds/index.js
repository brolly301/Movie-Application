const mongoose = require("mongoose");
const movies = require("./movies");
const shows = require("./shows");
const Movie = require("../models/movie");
const Show = require("../models/show");
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
  await Movie.insertMany(movies);
  await Show.insertMany(shows);
};

seedDatabase().then(() => {
  mongoose.connection.close();
});
