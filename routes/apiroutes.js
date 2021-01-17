const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("../models");

module.exports = function (app) {
  // You need a post route for api/workouts and a put for api/workouts/:id
  // get api workouts *
  // put api workouts
  // post api workouts *
  // get api workouts

  app.post("/api/workouts", (req, res) => {
    db.workout
      .create({ excercise: type })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

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

  // app.get("/user", (req, res) => {
  //   db.workout
  //     .find({})
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

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

  app.get("/", (req, res) => {
    db.workout
      .find({})
      .populate("workout")
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
