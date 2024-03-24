const Model = require("../models/Users");

const create = async (req, res) => {
  try {
    const user = await Model.create({
      name: "Hafsa Khan Lodhi",
      email: "hafsalodhi2023@gmail.com",
      password: "$1234567890",
      location: "abc",
    });

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { create };
