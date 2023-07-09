const express = require("express");
const { sendContactForm } = require("../controllers/contact");
const router = express.Router();

router.post("/contactUs", sendContactForm);

module.exports = router;
