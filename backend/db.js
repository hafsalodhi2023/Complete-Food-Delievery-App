const mongoose = require("mongoose");

const MONGODB_CONNECTION = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log({ Error: error.message });
  }
};

module.exports = MONGODB_CONNECTION;
