const express = require("express");
const {
  login,
  register,
  logout,
  getLoggedInUser,
} = require("../controllers/authentication");
const { verifyToken } = require("../middlewares/authentication");
const { userByID } = require("../middlewares/user");
const { registerValidator } = require("../middlewares/validation");
const router = express.Router();

router.post("/login", login);

router.post("/register", registerValidator, register);

router.get("/logout", logout);

router.get("/user", verifyToken, userByID, getLoggedInUser);

module.exports = router;
