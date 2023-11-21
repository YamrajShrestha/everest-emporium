const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String, // String is shorthand for {type: String}
  Price: String,
  Category: String,
  Description: String,
});

const User = mongoose.model("User", productSchema);

module.exports = User;
