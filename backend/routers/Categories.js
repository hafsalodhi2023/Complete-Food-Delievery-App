const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Categories");

router.get("/", Controller.get);

module.exports = router;
