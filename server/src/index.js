const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const User = require("./models/user");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(express.json());
app.use(cors());
const port = 4000;

connection();

app.post("/register", async (req, res) => {
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

app.post('/login',async(req,res)=>{
  console.log('working')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
