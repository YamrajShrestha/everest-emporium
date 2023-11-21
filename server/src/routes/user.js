const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      res.status(409).json({ msg: "Username already exists" });
    } else {
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashPassword;
      const data = await User.create(req.body);
      if (data) res.json({ msg: "User got registered. Please login" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const userDetails = await User.findOne({ username: req.body.username });
  if (!userDetails) {
    res.status(401).json({ msg: "Invalid Credentials" });
  } else {
    const isMatched = await bcrypt.compare(
      req.body.password,
      userDetails.password
    );
    if (isMatched) {
      res.json({ msg: "Login Success" });
    } else {
      res.status(401).json({ msg: "Incorrect password" });
    }
  }
});

module.exports = router;
