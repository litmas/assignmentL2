import { getExerciseData, getShoulderData } from '../API/exerciseAPI.js';

class ExerciseGenerator {
  /**
   * Generates exercises based on the specified muscle, type, and difficulty.
   *
   * @async
   * @param {string} muscle - The muscle for which exercises need to be generated.
   * @param {string} [type=''] - The type of exercises to be generated. (Optional)
   * @param {string} [difficulty=''] - The difficulty level of exercises to be generated. (Optional)
   * @returns {Promise<Array>} - A promise that resolves to an array of exercises.
   */
  async generateExercises(muscle, type = '', difficulty = '') {
    try {
      return await getExerciseData(muscle, type, difficulty);
    } catch (error) {
      this.logError('generateExercises', error);
      throw new Error('Failed to generate exercises');
    }
  }

  /**
   * Logs errors for debugging purposes.
   * @param {string} functionName - The name of the function where the error occurred.
   * @param {Error} error - The error object.
   */
  logError(functionName, error) {
    console.error(`Error in ${functionName}:`, error);
  }
}

export default ExerciseGenerator;
