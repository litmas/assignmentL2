class WorkoutUtility {
  /**
   * Returns the recommended number of sets and reps based on the difficulty level.
   *
   * @param {string} difficulty - The difficulty level ("beginner", "intermediate", "expert").
   * @returns {Object} An object containing the recommended sets and reps.
   */
  getRecommendedRepsAndSets(difficulty) {
    const recommendations = {
      beginner: { sets: 3, reps: "10-12" },
      intermediate: { sets: 4, reps: "8-10" },
      expert: { sets: 5, reps: "6-8" }
    };
    
    return recommendations[difficulty] || { sets: 3, reps: "10-12" };
  }

  /**
   * Returns exercise tips based on the type of exercise.
   *
   * @param {string} exerciseType - The type of exercise.
   * @returns {string} - A tip related to the exercise type.
   */
  getExerciseTips(exerciseType) {
    const tips = {
      strength: "Focus on form over weight. Lift heavier but with control.",
      strongman: "Lift heavy while maintaining control to avoid injury.",
      powerlifting: "Hold stretches for at least 30 seconds, don't rush.",
      chest: "Ensure proper range of motion and avoid bouncing weights.",
      lats: "Engage lats throughout and maintain a neutral spine."
    };

    return tips[exerciseType] || "Stay hydrated and maintain proper form.";
  }
}

export default WorkoutUtility;
