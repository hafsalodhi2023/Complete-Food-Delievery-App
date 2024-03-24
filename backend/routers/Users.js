const express = require("express");
const router = express.Router();
const Controller = require("../controllers/User");
const { body } = require("express-validator");
router.post("/user", [body("email").isEmail()], Controller.create);

module.exports = router;
