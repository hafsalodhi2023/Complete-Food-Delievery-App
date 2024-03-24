const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: [30, "Wrong Username! Username length maximum 20"],
    min: [8, "Wrong Username! Username length minimum 8"],
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    max: [30, "Wrong Password! Password length maximum 30"],
    min: [8, "Wrong Password! Password length minimum 8"],
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", UserSchema);
