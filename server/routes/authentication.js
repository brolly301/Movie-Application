const express = require("express");
const { login, register } = require("../controllers/authentication");
const router = express.Router();

router.get("/login", login);

router.post("/register", register);

module.exports = router;
