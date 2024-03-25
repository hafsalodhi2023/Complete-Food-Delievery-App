const Model = require("../models/Users");
const bycrpt = require("bcryptjs");

const create = async (req, res) => {
  const salt = await bycrpt.genSalt(10);
  const secPassword = await bycrpt.hash(req.body.password, salt);
  req.body.password = secPassword;

  try {
    const validation = await Model.findOne({ email: req.body.email });

    if (validation) {
      return res.status(403).send({ message: "User Already Registered." });
    } else {
      const data = await Model.create(req.body);
      return res
        .status(200)
        .send({ success: "User Created Successfully!", data });
    }
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

const validate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Model.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Please Enter Valid Credentials." });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Password." });
    }

    return res.status(200).json({ success: "You Are Successfully Logged In!" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

module.exports = { create, validate };
