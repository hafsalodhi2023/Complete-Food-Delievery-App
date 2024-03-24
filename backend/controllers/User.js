const Model = require("../models/Users");
const { validationResult } = require("express-validator");

const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const user = await Model.create({ ...req.body });

      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
};

module.exports = { create };
