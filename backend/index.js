require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const MONGODB_CONNECTION = require("./db");
const userRouter = require("./routers/Users");

MONGODB_CONNECTION();

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port: ${process.env.PORT}`);
});
