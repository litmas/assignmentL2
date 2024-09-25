
import { getExerciseData, getShoulderData } from './exerciseAPI.js';

export const generateExercises = async (muscle, type = '', difficulty = '') => {
  try {
    const exerciseData = await getExerciseData(muscle, type, difficulty);
    console.log('Exercise Data:', exerciseData);
  } catch (error) {
    console.error('Error in tracking exercises:', error);
  }
};

export const createWorkout = async (muscleGroups, type = '', difficulty = '') => {
  try {
    let workoutPlan = {};

    for (const muscle of muscleGroups) {
      let exerciseData;

      // If the muscle group is "shoulders", use the custom shoulder data
      if (muscle === 'shoulders') {
        // Call your getShoulderData function
        exerciseData = getShoulderData(muscle, type, difficulty);
      } else {
        // Otherwise, use the API for other muscle groups
        exerciseData = await getExerciseData(muscle, type, difficulty);
      }
      
      // Limit to 3 exercises, or use all if less than 3
      if (exerciseData.length >= 3) {
        workoutPlan[muscle] = exerciseData.slice(0, 3);
      } else {
        workoutPlan[muscle] = exerciseData;  
      }
    }

    console.log('Workout Plan:', JSON.stringify(workoutPlan, null, 2));
    return workoutPlan;
  } catch (error) {
    console.error('Error creating workout:', error);
    throw error;
  }
};


const muscleGroups = ['shoulders'];  
const type = 'strength';                 // optional. Data that can be used: cardio, olympic_weightlifting, plyometrics, powerlifting, strength, stretching, strongman
const difficulty = 'beginner';           // optional. Data that can be used: beginner, intermediate, expert 

 // Pretty prints the workoutPlan object

// Function to create the workout split plan for a week
export const createWorkoutSplit = async (splitType, type = 'strength', difficulty = 'beginner') => {
    try {
      let workoutPlan = {};
  
      const splits = {    
        pplSplit: [   // done
          { day: 1, muscles: ['chest', 'shoulders', 'triceps'] }, 
          { day: 2, muscles: ['lats', 'middle_back', 'biceps'] },                
          { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },                          
          { day: 4, rest: true },                                 
          { day: 5, muscles: ['chest', 'shoulders', 'triceps'] }, 
          { day: 6, muscles: ['lats', 'lower_back', 'biceps'] },                
          { day: 7, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] }                           
        ],
          arnoldSplit: [    // done
          { day: 1, muscles: ['chest', 'lats', 'middle_back'] },    
          { day: 2, muscles: ['shoulders', 'biceps', 'triceps'] },    
          { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },
          { day: 4, muscles: ['chest', 'lats', 'lower_back'] },
          { day: 5, muscles: ['shoulders', 'biceps', 'triceps'] },    
          { day: 6, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] },
          { day: 7, rest: true }
        ],
        fullBodySplit: [
         /*  console.log('This is the full body workout split. Note that there are roughly three options for each muscle but you should do one of them in the full body split.'), */
          { day: 1, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps', 'shoulders']},
          { day: 2, rest: true },
          { day: 3, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps', 'shoulders']},
          { day: 4, rest: true },
          { day: 5, muscles: ['chest', 'lats', 'quadriceps', 'hamstrings', 'glutes', 'biceps', 'triceps', 'shoulders'] },
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        upperLowerSplit: [
          { day: 1, muscles: ['chest', 'lats', 'middle_back', 'biceps', 'triceps', 'shoulders'] }, 
          { day: 2, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },                                             
          { day: 3, rest: true },                                                   
          { day: 4, muscles: ['chest', 'lats', 'lower_back', 'biceps', 'triceps', 'shoulders'] }, 
          { day: 5, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] },                                            
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        fourDaySplit: [
          { day: 1, muscles: ['lats', 'middle_back', 'biceps'] },
          { day: 2, muscles: ['chest', 'triceps'] },
          { day: 3, rest: true },
          { day: 4, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes']},
          { day: 5, muscles: ['shoulders'] },
          { day: 6, rest: true },
          { day: 7, rest: true }
        ],
        fiveDaySplit: [
          { day: 1, muscles: ['chest'] },
          { day: 2, muscles: ['lats', 'middle_back'] },
          { day: 3, muscles: ['shoulders', 'traps'] },   
          { day: 4, muscles: ['quadriceps', 'hamstrings', 'glutes'] },
          { day: 5, muscles: ['biceps', 'triceps'] },
          { day: 6, rest: true },
          { day: 7, rest: true }
        ]
      };
  
      const selectedSplit = splits[splitType];
  
      if (!selectedSplit) {
        throw new Error('Invalid split type');
      }
  
      for (const day of selectedSplit) {
        if (day.rest) {
          workoutPlan[`Day ${day.day}`] = 'Rest day';
        } else {
          const dailyWorkout = await createWorkout(day.muscles, type, difficulty);
          workoutPlan[`Day ${day.day}`] = dailyWorkout;
        }
      }
  
      console.log('Weekly Workout Plan:', JSON.stringify(workoutPlan, null, 2));
      return workoutPlan;
    } catch (error) {
      console.error('Error creating workout split:', error);
      throw error;
    }
  };

// store the user's workouts in a JSON file where they can also say the reps, sets and weight that they took using fs and then display the data if they want to see it.  

// This means that the module will need user input and for them to enter in the weight they took for each set and how many reps they did. This seems pretty cool and interesting to make. 