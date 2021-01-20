const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const User = require("./models/workout");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/htmlroutes.js")(app);

require("./routes/apiroutes.js")(app);

app.put("api/workout/:id", ({ body }, res) => {
  db.workout
    .create(body)
    .then(({ _id }) =>
      db.workout.findOneAndUpdate(
        {},
        { $push: { workout: _id } },
        { new: true }
      )
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    });
});

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
