const express = require("express");
const router = express.Router();
const Controller = require("../controllers/User");

router.post("/register", Controller.create);
router.post("/login", Controller.validate);

module.exports = router;
