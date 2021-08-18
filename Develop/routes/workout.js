const router = require('express').Router();
const db = require(`../models`)

router.get('/workouts/range', async (req, res) => {
    try {
        const workoutsRange = await db.Workout.aggregate([{
          $addFields:{
            totalDuration:{
              $sum: `$exercises.duration`
            }
          }
        }]).sort({_id:-1}).limit(7)
        res.json(workoutsRange);
      } catch (err) {
        console.log(err);
        res.json(err);
      }
});

router.get('/workouts', async (req, res) => {
    try {
        const getWorkouts = await db.Workout.aggregate([{
           $addFields:{
             totalDuration:{
               $sum: `$exercises.duration`
             }
           }
         }])
         res.json(getWorkouts);
       } catch (err) {
         console.log(err);
         res.json(err);
       }
});
// Creates a new workout
router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await db.Workout.create(req.body);
        res.json(newWorkout);
      } catch (err) {
        console.log(err);
        re.json(err);
      }
});

// this will add an exercise to the workout
router.put('/workouts/:id', async (req, res) => {
    try {
        const newExercise = await db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body },
          }
        );
        res.json(newExercise);
      } catch (err) {
        console.log(err);
        res.json(err);
      }
});

module.exports = router;