const express = require("express");
const { sendContactForm } = require("../controllers/contact");
const { contactUsValidator } = require("../middlewares/validation");
const router = express.Router();

router.post("/contactUs", contactUsValidator, sendContactForm);

module.exports = router;
