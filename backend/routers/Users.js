const express = require("express");
const router = express.Router();
const Controller = require("../controllers/User");

router.post("/register", Controller.register).post("/login", Controller.login);

module.exports = router;
