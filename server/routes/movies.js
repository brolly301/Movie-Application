const express = require("express");
const { getMovies, getShows } = require("../controllers/movies");
const router = express.Router();

router.get("/", getMovies);

router.get("/shows", getShows);

module.exports = router;
