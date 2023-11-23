const mongoose = require("mongoose");
const { Schema } = mongoose;

const products = new Schema({
  title: String, // String is shorthand for {type: String}
  price: String,
  brand: String,
  category: String,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", products);
module.exports = Product;
