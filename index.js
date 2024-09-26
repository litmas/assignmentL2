import { generateExercises, createWorkout, createWorkoutSplit } from "./src/fitnessTracker.js";

// Select DOM elements for the forms and result displays
const generateExerciseForm = document.getElementById("generateExerciseForm");
const exerciseResultDisplay = document.getElementById("exerciseResultDisplay");

// Add debugging logs for form submission
generateExerciseForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get user input values
  const muscle = document.getElementById("exerciseMuscle").value;
  const type = document.getElementById("exerciseType").value;
  const difficulty = document.getElementById("exerciseDifficulty").value;

  // Debugging: Check if inputs are being captured correctly
  console.log("Form submitted with values:", { muscle, type, difficulty });

  try {
    // Fetch exercises
    const exercises = await generateExercises(muscle, type, difficulty);    // exercises is undefined. The values that are sent in are correct but exercises is still undefined. 
    console.log(exercises)
    
    // Debugging: Log the fetched exercises
    console.log("Fetched exercises:", exercises);

    // Display the exercises (if any were fetched)
    if (exercises && exercises.length > 0) {
      exerciseResultDisplay.innerHTML = `<pre>${JSON.stringify(exercises, null, 2)}</pre>`;
    } else {
      exerciseResultDisplay.innerHTML = `<p>No exercises found for the selected criteria.</p>`;
    }
  } catch (error) {
    // Debugging: Log any errors
    console.error("Error fetching exercises:", error);
    exerciseResultDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
