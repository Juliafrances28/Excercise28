const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("../models");

module.exports = function (app) {
//add range 

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

  // db.orders.aggregate([
  //   { $match: { status: "A" } },
  //   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
  // ]);

  {
   
    },

    // Find the max balance of all accounts
Users.aggregate([ 
  {
    $addFields: {
      totalWeight: { $sum: "$weight" } ,
      totalDuration: { $sum: "$duration" }
    }
  },
])
.then(function (res) {
  console.log(res); 

});













{/* project('-id maxBalance'). */}
  // [ { maxBalance: 98 } ]