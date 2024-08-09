const express = require("express");

const mongoose = require("mongoose");

const { PORT = 3001 } = process.env;

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    // console.log("Connected to DB");
  })
  .catch(console.error);

app.use((req, res, next) => {
  req.user = {
    _id: "66b119770b83d2013e525d7d",
  };
  next();
});

const routes = require("./routes");

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});
