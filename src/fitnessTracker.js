import { getExerciseData, getShoulderData } from './exerciseAPI.js';

export const generateExercises = async (muscle, type = '', difficulty = '') => {     
  try {
    const exerciseData = await getExerciseData(muscle, type, difficulty);
    return exerciseData
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
    return workoutPlan
  } catch (error) {
    console.error('Error creating workout:', error);
    throw error;
  }
};

/* createWorkout(['triceps', 'chest', 'shoulders', 'strength', 'beginner']) */

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
  
    return workoutPlan
    
    } catch (error) {
      console.error('Error creating workout split:', error);
      throw error;
    }
  };

  // Suggests reps and sets based on difficulty level
export const getRecommendedRepsAndSets = (difficulty) => {
  const recommendations = {
    beginner: { sets: 3, reps: "10-12" },
    intermediate: { sets: 4, reps: "8-10" },
    advanced: { sets: 5, reps: "6-8" }
  };

  return recommendations[difficulty] || { sets: 3, reps: 10 };
};

// Provides exercise tips for specific muscle groups or types of exercises
export const getExerciseTips = (exerciseType) => {
  const tips = {
    strength: "Focus on form over weight. Lift heavier but with control.",
    strongman: "Focus on lifting heavy whilst also maintaining control of the weight to reduce risk of injury.",
    flexibility: "Hold stretches for at least 30 seconds, don't rush.",
    chest: "Ensure proper range of motion; avoid bouncing weights off the chest.",
    back: "Engage the lats throughout and maintain a neutral spine."
  };

  return tips[exerciseType] || "Stay hydrated and maintain proper form.";
};
