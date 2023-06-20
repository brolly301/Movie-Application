const express = require("express");
const { editProfileDetails } = require("../controllers/profile");
const { userByID } = require("../middlewares/user");
const { getLoggedInUser } = require("../controllers/authentication");
const { verifyToken } = require("../middlewares/authentication");
const router = express.Router();

router.patch("/editUserDetails", verifyToken, userByID, editProfileDetails);

module.exports = router;
