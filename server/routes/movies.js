const express = require("express");
const {
  getMovies,
  getComingSoon,
  book,
  editMovies,
} = require("../controllers/movies");
const router = express.Router();

router.get("/", getMovies);

router.patch("/", editMovies);

router.get("/comingSoon", getComingSoon);

router.post("/book", book);

module.exports = router;
