const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  confirmPassword: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
