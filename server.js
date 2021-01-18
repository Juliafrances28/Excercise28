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

mongodb + srv; //dbworkout:<Peterrabbit2020!>@cluster0.ft9nt.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
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
