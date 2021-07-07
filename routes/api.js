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

// Routes to add an exercise
router.put("/api/workouts/:id", ({ params, body}, res)  => {
    console.log("PARAMS", body, params);

    Workout.findOneAndUpdate(
        {
            _id: params.id
        },
        {
            $push: {
                exercises: body
            }
        },
        {
            new: true
        }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Routes to get all workouts within a range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// Routes to get the last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;