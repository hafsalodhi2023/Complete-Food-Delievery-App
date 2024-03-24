require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const MONGODB_CONNECTION = require("./db");

MONGODB_CONNECTION();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port: ${process.env.PORT}`);
});
