const express = require("express");
const {
  editProfileDetails,
  getBookingDetails,
  deleteBooking,
  editLoginDetails,
} = require("../controllers/profile");
const { userByID } = require("../middlewares/user");
const { getLoggedInUser } = require("../controllers/authentication");
const { verifyToken } = require("../middlewares/authentication");
const { editProfileValidator } = require("../middlewares/validation");
const router = express.Router();

router.patch(
  "/editUserDetails",
  verifyToken,
  userByID,
  editProfileValidator,
  editProfileDetails
);

router.get("/bookingDetails", verifyToken, userByID, getBookingDetails);

router.delete("/booking", verifyToken, userByID, deleteBooking);

router.patch("/editLoginDetails", verifyToken, userByID, editLoginDetails);

module.exports = router;
