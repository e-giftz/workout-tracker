const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                required: true
            },
            type: {
                type: String
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            }
        },
    ]
    
},
{
    toJSON: { virtuals: true}
}
);

workoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);

    return duration;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;