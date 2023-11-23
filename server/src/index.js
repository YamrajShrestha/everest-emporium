const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const app = express();
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");
const port = 4000;

connection();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
