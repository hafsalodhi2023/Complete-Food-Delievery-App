const Model = require("../models/Users");
const { validationResult } = require("express-validator");

const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const emailValidation = await Model.findOne({ email: req.body.email });

      if (emailValidation) {
        return res.status(403).send({ message: "User Already Registered" });
      } else {
        const user = await Model.create({ ...req.body });
        return res.status(200).send({ user });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Enter Valid Credentials." });
    }
  }
};

module.exports = { create };
