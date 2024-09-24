
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

const createWorkout = async (muscleGroups, type = '', difficulty = '') => {
  try {
    let workoutPlan = {};

    for (const muscle of muscleGroups) {
      const exerciseData = await getExerciseData(muscle, type, difficulty);
      
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
const type = 'strength';    // optional. Data that can be used: cardio, olympic_weightlifting, plyometrics, powerlifting, strength, stretching, strongman
const difficulty = 'beginner';  // optional. Data that can be used: beginner, intermediate, expert 


// You should be able to call the workout function above and get a workout for each day of the split where you can also choose the type, muscles and difficulty. 

/* createWorkout(muscleGroups, type, difficulty); */

// Function to create the workout split plan for a week
const createWorkoutSplit = async (splitType, type = 'strength', difficulty = 'beginner') => {
    try {
      let workoutPlan = {};
  
      // Define the muscle groups for each split type
      const splits = {    
        pplSplit: [   // done
          { day: 1, muscles: ['chest', 'shoulders', 'triceps'] }, // there isnt a thing for shoulders in the API.     // add your own sort of database for the shoulders where you have three exercises for beginner, intermediate and expert. And then strongman, strength and powerlifting. 
          { day: 2, muscles: ['lats', 'middle_back', 'biceps'] },                
          { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },                          
          { day: 4, rest: true },                                 
          { day: 5, muscles: ['chest', 'shoulders', 'triceps'] }, // there isnt a thing for shoulders in the API. 
          { day: 6, muscles: ['lats', 'lower_back', 'biceps'] },                
          { day: 7, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] }                           
        ],
        arnoldSplit: [    // done
          { day: 1, muscles: ['chest', 'lats', 'middle_back'] },    
          { day: 2, muscles: ['shoulders', 'biceps', 'triceps'] },    // there isnt a thing for shoulders in the API. 
          { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },
          { day: 4, muscles: ['chest', 'lats', 'lower_back'] },
          { day: 5, muscles: ['shoulders', 'biceps', 'triceps'] },    // there isnt a thing for shoulders in the API. 
          { day: 6, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] },
          { day: 7, rest: true }
        ],
        fullBodySplit: [    // gives you three recommendations for each exercise. You should only do one exercise for each muscle group. 
          { day: 1, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps']},
          { day: 2, rest: true },
          { day: 3, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps']},
          { day: 4, rest: true },
          { day: 5, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps'] },
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        upperLowerSplit: [
          { day: 1, muscles: ['chest', 'lats', 'middle_back', 'biceps', 'triceps'] }, 
          { day: 2, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },                                             
          { day: 3, rest: true },                                                   
          { day: 4, muscles: ['chest', 'lats', 'lower_back', 'biceps', 'triceps'] }, 
          { day: 5, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] },                                            
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        fourDaySplit: [
          { day: 1, muscles: ['lats', 'middle_back', 'biceps'] },
          { day: 2, muscles: ['chest', 'triceps'] },
          { day: 3, rest: true },
          { day: 4, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes']},
          { day: 5, muscles: ['shoulders'] }, // there isnt a thing for shoulders. ADD IT IN 
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        fiveDaySplit: [
          { day: 1, muscles: ['chest'] },
          { day: 2, muscles: ['lats', 'middle_back'] },
          { day: 3, muscles: ['shoulders', 'traps'] },   // there isnt a thing for shoulders. ADD IT IN 
          { day: 4, muscles: ['quadriceps', 'hamstrings', 'glutes'] },
          { day: 5, muscles: ['biceps', 'triceps'] },
          { day: 6, rest: true },
          { day: 7, rest: true }
        ]
      };
  
      // Select the appropriate split based on input
      const selectedSplit = splits[splitType];
  
      if (!selectedSplit) {
        throw new Error('Invalid split type');
      }
  
      // Iterate through each day of the split
      for (const day of selectedSplit) {
        if (day.rest) {
          workoutPlan[`Day ${day.day}`] = 'Rest day';
        } else {
          const dailyWorkout = await createWorkout(day.muscles, type, difficulty);
          workoutPlan[`Day ${day.day}`] = dailyWorkout;
        }
      }
  
      console.log('Weekly Workout Plan:', workoutPlan);
      return workoutPlan;
    } catch (error) {
      console.error('Error creating workout split:', error);
      throw error;
    }
  };
  
  // Example usage:
  createWorkoutSplit('pplSplit', 'strength', 'beginner');  // Choose a split type and exercise filters