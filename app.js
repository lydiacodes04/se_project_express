const express = require("express");
const mongoose = require("mongoose");
// const mainRouter = require("./routes/index");
const { PORT = 3001 } = process.env;
const app = express();

// mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

const routes = require("./routes");
app.use(express.json());
app.use(routes);

//middleware
app.use((req, res, next) => {
  req.user = {
    _id: "66b119770b83d2013e525d7d", // paste the _id of the test user created in the previous step
  };
  next();
});

// app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
