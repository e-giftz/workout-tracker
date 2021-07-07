const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");


//  Routes to create new workouts
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;