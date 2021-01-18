const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.workout
      .find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // You need a post route for api/workouts
  app.post("/api/workouts", ({ body }, res) => {
    db.workout
      .create(body)
      .then((dbworkout) => {
        res.json(dbworkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.workout
      .aggregate([
        { $sort: { day: -1 } },
        { $limit: 7 },
        {
          $addFields: {
            totalWeight: { $sum: "$weight" },
            totalDuration: { $sum: "$duration" },
          },
        },
      ])
      .then(function (workouts) {
        res.json(workouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
