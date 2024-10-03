# assignmentL2

This is a workout module that uses the Exercise API from API Ninjas.

## How to install:

Simply create a new visual studio project or open an existing project. Clone this github repo: https://github.com/litmas/assignmentL2 and add it into your project by running git clone '...'. After that, all you need to do is import the functions into your index.js or whichever file you want to use. And run the functions below:

    import ExerciseGenerator from "./workoutModule/exerciseGenerator.js";
    import WorkoutPlanner from "./workoutModule/workoutPlanner.js";
    import WorkoutUtility from "./workoutModule/workoutUtility.js";

    const exerciseGenerator = new ExerciseGenerator()
    const workoutPlanner = new WorkoutPlanner();
    const workoutUtility = new WorkoutUtility();

    exerciseGenerator.generateExercises('biceps', 'strength', 'intermediate')
    workoutPlanner.createWorkout(['triceps', 'chest', 'shoulders', 'strength', 'beginner'])
    workoutPlanner.createWorkoutSplit('fourDaySplit', 'strongman', 'intermediate')
    workoutUtility.getRecommendedRepsAndSets('beginner')
    workoutUtility.getExerciseTips('chest')

#### Note that the Exercise API only takes certain parameters. This is the link to the docs: [API Ninjas Docs for the Exercise API](https://api-ninjas.com/api/exercises).

## Look below before using or changing anything in the module!

There are two folders in this module, one called API and the other called workoutModule. 
The API folder contains the exerciseAPI.js which connects to the API to get the data for each exercise. I would recommend not changing anything in the options or getExerciseData functions since these connect to the API. However, I have added my own data since there were no exercises for shoulders. If you wish to improve upon the dataset and add your own exercises, it is possible to create new functions like getShoulderData(). 

The second folder is workoutModule which conatins fitnessTracker.js. There are five functions and the first three return JSON data. The other two which are getRecommendedRepsAndSets and getExerciseTips are helper functions that return strings. It is possible to use these on their own but I preferably use them when working with the first three functions. Right now the module is not set up for use in terminal. If you want to use the module and get the data in the terminal, there are calls at the bottom of each function which are commented out. Uncomment them and you can get the data in the terminal with the functions listed above. 

## Things that can be improved on the workout module: 

There are many ways that this module can be improved, from the API to the functions in the module. As said previously I had to add my own data for shoulder exercises which means that users can do the same with other exercises for lesser trained muscles. 

There is also endless possibility to improve the functions inside the module either by improving upon the function that are already there or by making your own. I have built the first three functions to return JSON data which means that users can decide to either convert it to HTML or keep it as it is. However, you can make a version that converts the data inside the module. You could also improve upon the last two functions to make them more independent as right now they are mainly used with the other functions. 

### The coding language used is vanilla Javascript and I used Node v21.6.2.
### This module has no dependencies and can run with just cloning it to your repository. 
### I am using SemVer and this is version 1.0.0 
