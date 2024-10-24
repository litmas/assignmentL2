import ExerciseGenerator from './exerciseGenerator.js';
import { getShoulderData } from '../API/exerciseAPI.js';

class WorkoutPlanner {
  constructor() {
    this.exerciseGenerator = new ExerciseGenerator();
  }

  /**
   * Creates a workout plan based on the given muscles, type, and difficulty.
   *
   * @param {Array<string>} muscles - The muscles to include in the workout plan.
   * @param {string} [type=''] - The type of exercises to include in the workout plan.
   * @param {string} [difficulty=''] - The difficulty level of the exercises.
   * @returns {Promise<Object>} - A promise that resolves to the workout plan object.
   */
  async createWorkout(muscles, type = '', difficulty = '') {
    const workoutPlan = {};

    for (const muscle of muscles) {
      try {
        const exercises = await this.fetchExercises(muscle, type, difficulty);
        workoutPlan[muscle] = this.limitExercises(exercises);
      } catch (error) {
        this.logError('createWorkout', error);
      }
    }

    return workoutPlan;
  }

  /**
   * Creates a workout split plan based on the selected split type.
   *
   * @param {string} splitType - The workout split type.
   * @param {string} [type=''] - The type of workout.
   * @param {string} [difficulty=''] - The difficulty level of the workout.
   * @returns {Promise<Object>} - The generated workout split plan.
   */
  async createWorkoutSplit(splitType, type = '', difficulty = '') {
    const allSplits = this.getAvailableSplits();
    const selectedSplit = allSplits[splitType];

    if (!selectedSplit) {
      throw new Error('Invalid split type');
    }

    const workoutSplit = {};

    for (const day of selectedSplit) {
      try {
        workoutSplit[`Day ${day.day || day.rest}`] = day.rest 
          ? 'Rest day' 
          : await this.createWorkout(day.muscles, type, difficulty);
      } catch (error) {
        this.logError('createWorkoutSplit', error);
      }
    }

    return workoutSplit;
  }

  /**
   * Fetches exercises for a given muscle group.
   * @param {string} muscle - Muscle group.
   * @param {string} type - Type of exercise.
   * @param {string} difficulty - Difficulty level.
   * @returns {Promise<Array>} - Exercises fetched from the API.
   */
  async fetchExercises(muscle, type, difficulty) {
    return muscle === 'shoulders' ? getShoulderData(muscle, type, difficulty) : this.exerciseGenerator.generateExercises(muscle, type, difficulty);
  }

  /**
   * Limits the number of exercises to 3.
   * @param {Array} exercises - List of exercises.
   * @returns {Array} - The top 3 exercises or fewer.
   */
  limitExercises(exercises) {
    return exercises.length >= 3 ? exercises.slice(0, 3) : exercises;
  }

  /**
   * Provides a list of available workout splits.
   * @returns {Object} - Object containing workout splits.
   */
  getAvailableSplits() {
    return {
      pplSplit: [
        { day: 1, muscles: ['chest', 'shoulders', 'triceps'] },
        { day: 2, muscles: ['lats', 'middle_back', 'biceps'] },
        { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },
        { day: 4, rest: true },
        { day: 5, muscles: ['chest', 'shoulders', 'triceps'] },
        { day: 6, muscles: ['lats', 'lower_back', 'biceps'] },
        { day: 7, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] }
       ],
        arnoldSplit: [
        { day: 1, muscles: ['chest', 'lats', 'middle_back'] },
        { day: 2, muscles: ['shoulders', 'biceps', 'triceps'] },
        { day: 3, muscles: ['quadriceps', 'hamstrings', 'adductors', 'glutes'] },
        { day: 4, muscles: ['chest', 'lats', 'lower_back'] },
        { day: 5, muscles: ['shoulders', 'biceps', 'triceps'] },
        { day: 6, muscles: ['quadriceps', 'hamstrings', 'abductors', 'glutes'] },
        { day: 7, rest: true }
       ],
       fullBodySplit: [
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
  }

  /**
   * Logs errors for debugging purposes.
   * @param {string} functionName - The function where the error occurred.
   * @param {Error} error - The error object.
   */
  logError(functionName, error) {
    console.error(`Error in ${functionName}:`, error);
  }
}

export default WorkoutPlanner;
