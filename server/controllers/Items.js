const get = async (req, res) => {
  try {
    res.status(200).send(global.foodItems);
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = { get };
