const express = require("express");
const {
  login,
  register,
  logout,
  getLoggedInUser,
} = require("../controllers/authentication");
const { verifyToken } = require("../middlewares/authentication");
const { userByID } = require("../middlewares/user");
const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/logout", logout);

router.get("/user", verifyToken, userByID, getLoggedInUser);

module.exports = router;
