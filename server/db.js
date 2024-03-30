const mongoose = require("mongoose");

const MONGODB_CONNECTION = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    const fetchedData = await mongoose.connection.db;
    const items = await fetchedData.collection("Items");
    const categories = await fetchedData.collection("Category");

    const data1 = await items.find({}).toArray();
    const data2 = await categories.find({}).toArray();

    global.foodItems = data1;
    global.categories = data2;
  } catch (error) {
    console.log({ Error: error.message });
  }
};

module.exports = MONGODB_CONNECTION;
