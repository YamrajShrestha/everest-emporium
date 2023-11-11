const mongoose = require("mongoose");
const connection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/everest-emporium"
    );
    if (conn) {
      console.log("connected to mongoose");
    } else {
      console.log("db connection to mongodb");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = connection;
