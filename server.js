const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const path = require("path");

const PORT = process.env.PORT || 3000;
// const User = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

MONGODB_URI =
  "mongodb+srv://dbworkout:<Barley2020!>@cluster0.ft9nt.mongodb.net/workout?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require("./routes/htmlroutes.js"));

app.use(require("./routes/apiroutes.js"));

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
