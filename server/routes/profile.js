const express = require("express");
const {
  editProfileDetails,
  getBookingDetails,
} = require("../controllers/profile");
const { userByID } = require("../middlewares/user");
const { getLoggedInUser } = require("../controllers/authentication");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.patch("/editUserDetails", verifyToken, userByID, editProfileDetails);

router.get("/bookingDetails", verifyToken, userByID, getBookingDetails);

module.exports = router;
