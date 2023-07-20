const express = require("express");
const { sendContactForm, sendNewsletter } = require("../controllers/contact");
const {
  contactUsValidator,
  newsletterValidator,
} = require("../middlewares/validation");
const router = express.Router();

router.post("/contactUs", contactUsValidator, sendContactForm);

router.post("/newsletter", newsletterValidator, sendNewsletter);

module.exports = router;
