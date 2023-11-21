const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String, // String is shorthand for {type: String}
  price: String,
  category: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
