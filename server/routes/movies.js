const express = require("express");
const { getMovies, getShows, getComingSoon } = require("../controllers/movies");
const router = express.Router();

router.get("/", getMovies);

router.get("/comingSoon", getComingSoon);

router.get("/shows", getShows);

module.exports = router;
