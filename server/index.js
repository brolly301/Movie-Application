//packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

const app = express();

//database & session storage

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) =>
    console.log("Database not connected. Check Mongo URI." + err)
  );

const sessionOptions = {
  secret: "Test",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 2,
    maxAge: 120 * 60 * 1000,
  },
};

app.use(session(sessionOptions));

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//Routes
const userRoutes = require("./routes/authentication.js");
const movieRoutes = require("./routes/movies.js");
const profileRoutes = require("./routes/profile.js");
app.use("/", userRoutes);
app.use("/profile", profileRoutes);
app.use("/movies", movieRoutes);

//Listener
app.listen(process.env.port, () =>
  console.log(`Running on Server ${process.env.port}`)
);
