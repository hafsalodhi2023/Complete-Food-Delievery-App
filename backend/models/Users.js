const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    minlength: [8, "Username length must be at least 8 characters."],
    maxlength: [30, "Username length must not exceed 30 characters."],
  },
  location: {
    type: String,
    required: [true, "Location is required."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password length must be at least 8 characters."],
    maxlength: [30, "Password length must not exceed 30 characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
