const express = require("express");
var router = express.Router();

const Product = require("../models/products");
router.use(express.json());

router.post("/products", async (req, res) => {
  // console.log(req.body);
  const productDetails = await Product.create(req.body);
  if (productDetails) {
    res.json({ msg: `${req.body.title} has been created` });
  }
});

router.get("/products", async (req, res) => {
  // console.log("test")
  const productDetails = await Product.find();
  if (productDetails) {
    res.json({ productList: productDetails });
  }
});

module.exports = router;
