let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  }
);

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 55,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "tricep curl",
        duration: 20,
        weight: 65,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "shoulders",
        duration: 25,
        weight: 125,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 3,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 275,
        reps: 10,
        sets: 3
      }
    ]
  },
  
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "dead lift",
        duration: 20,
        weight: 2750,
        reps: 10,
        sets: 3
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });