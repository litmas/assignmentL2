
import { getExerciseData } from './exerciseAPI.js';

const trackExercises = async (muscle, type = '', difficulty = '') => {
  try {
    const exerciseData = await getExerciseData(muscle, type, difficulty);
    console.log('Exercise Data:', exerciseData);
  } catch (error) {
    console.error('Error in tracking exercises:', error);
  }
};

/* trackExercises('triceps', 'strength', 'beginner'); */

const createWorkout = async (muscleGroups) => {
  try {
    let workoutPlan = {};

    for (const muscle of muscleGroups) {
      const exerciseData = await getExerciseData(muscle);
      if (exerciseData.length >= 3) {
        workoutPlan[muscle] = exerciseData.slice(0, 3);
      } else {
        workoutPlan[muscle] = exerciseData;  
      }
    }

    console.log('Workout Plan:', workoutPlan);
    return workoutPlan;
  } catch (error) {
    console.error('Error creating workout:', error);
    throw error;
  }
};

const muscleGroups = ['triceps', 'biceps', 'chest'];  
createWorkout(muscleGroups);



const workoutPlan = async (workouts) => {}

