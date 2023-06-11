const mongoose = require("mongoose");
const movies = require("./movies");
const Movie = require("../models/movie");
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
  await Movie.insertMany(movies);
};

seedDatabase().then(() => {
  mongoose.connection.close();
});
