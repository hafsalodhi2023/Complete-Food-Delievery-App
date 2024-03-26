require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const MONGODB_CONNECTION = require("./db");
const userRouter = require("./routers/Users");
const itemRouter = require("./routers/Items");
const categoryRouter = require("./routers/Categories");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);
app.use("/api/categories", categoryRouter);

MONGODB_CONNECTION();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port: ${process.env.PORT}`);
});
