const mongoose = require("mongoose");
const { number } = require("prop-types");
let db = "../models/workout.js";

const Schema = mongoose.Schema;

// add the date. to schema

const workoutSchema = new Schema({
    day: new Date().setDate(new Date().getDate() - 6), //why does it say -6),?
    excercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter the type of workout here",
        },

        name: {
          type: String,
          trim: true,
          required: "Enter the name of workout here",
        },

        duration: {
          type: number,
          required: "Enter the duration of the workout",
        },

        weight: {
          type: number,
        },

        reps: {
          type: number,
        },

        sets: {
          type: number,
        },

        distance: {
          type: number,
        },
      },
    ],
  }),
  workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
