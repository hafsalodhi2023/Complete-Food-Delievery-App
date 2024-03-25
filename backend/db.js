const mongoose = require("mongoose");

const MONGODB_CONNECTION = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    const fetchedData = mongoose.connection.db;
    const items = fetchedData.collection("Items");
    const data = await items.find({}).toArray();
    global.foodItems = data;
  } catch (error) {
    console.log({ Error: error.message });
  }
};

module.exports = MONGODB_CONNECTION;
