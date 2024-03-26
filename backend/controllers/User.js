require("dotenv").config();

const Model = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(req.body.password, salt);
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
    return res.status(400).send({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Model.findOne({ email });
    const jwtSecret = process.env.JWT_SECRET;
    const userData = { id: user._id };
    const authToken = jwt.sign(userData, jwtSecret);

    const pwdCompare = await bcrypt.compare(password, user.password);

    if (!user) {
      return res
        .status(400)
        .json({ message: "Please Enter Valid Credentials." });
    }

    if (!pwdCompare) {
      return res.status(400).json({ message: "Invalid Password." });
    }

    return res.status(200).json({
      success: "You Are Successfully Logged In!",
      authToken: authToken,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = { register, login };
