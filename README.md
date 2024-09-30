# assignmentL2

This is a workout module that uses the Exercise API from API Ninjas.

How to install:

Simply create a new visual studio project or open an existing project. Clone this github repo: https://github.com/litmas/assignmentL2 and add it into your project by running git clone '...'. After that All you nned to do is import the functions into your index.js or whichever file you want to use. And run the functions below:

generateExercises('biceps', 'strength', 'intermediate')
createWorkout(['triceps', 'chest', 'shoulders', 'strength', 'beginner'])
createWorkout('fourDaySplit', 'strongman', 'intermediate')
getRecommendedRepsAndSets('beginner')
getExerciseTips('chest')

Note that the Exercise API only takes certain parameters. This is the link to the docs: [text](https://api-ninjas.com/api/exercises).

Look below before using or changing anything in the module!

There are two folders in this module, one called API and the other called workoutModule. 
The API folder contains the exerciseAPI.js which connects to the API to get the data for each exercise. I would recommend not changing anything in the options or getExerciseData functions since these connect to the API. However, I have added my own data since there were no exercises for shoulders. If you wish to improve upon the dataset and add your own exercises, it is possible to create new functions like getShoulderData(). 

The second folder is workoutModule which conatins fitnessTracker.js. There are five functions and the first three return JSON data. The other two which are getRecommendedRepsAndSets and getExerciseTips are helper functions that return strings. It is possible to use these on their own but I preferably use them when working with the first three functions. Right now the module is not set up for use in terminal. If you want to use the module and get the data in the terminal, there are calls at the bottom of each function which are commented out. Uncomment them and you can get the data in the terminal with the functions listed above. 

Things that can be improved on the workout module: 





