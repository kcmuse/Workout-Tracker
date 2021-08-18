const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please Enter the type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter name of workout"
            },
            duration: {
                type: Number,
                required: "Please enter a duration for the workout"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number
            }
        }
    ],
        totalDuration: {
        type: Number,
        default: 0,
    },    
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;