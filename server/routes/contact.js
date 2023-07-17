const express = require("express");
const { sendContactForm, sendNewsletter } = require("../controllers/contact");
const {
  contactUsValidator,
  newsletterValidation,
} = require("../middlewares/validation");
const router = express.Router();

router.post("/contactUs", contactUsValidator, sendContactForm);

router.post("/newsletter", newsletterValidation, sendNewsletter);

module.exports = router;
