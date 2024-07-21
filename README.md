
# My Quiz App

This quiz application was made as an assignment for a frontend job position.

### Description

The user is presented with a home page where the they can select a category and the difficulty level before answering the quiz.

The default level is easy and the default category is General Knowledge

* According to the category, the user is presented with one of the settings👇🏻

##### EASY
- 5 questions
- All question type boolean
- Timer 15 seconds

##### MEDIUM
- 10 questions
- Mixed question types
- Timer 10 seconds

#### HARD
- 15 questions
- Type multiple
- Timer 5 seconds

### Features

*By starting the quiz, the user is redirected to a `/quiz/question{question_number}`.

* After the last question, the user is presented with the results view containing the summary of points, and correct and incorrect count.

* The user can **retry** the incorrect questions. The user is redirected to `/quiz/question/rety{question_number}`

* Each question has a timer according to the options above 👆🏼

The user can **reset** the quiz from any question.

### Technologies
* React 
* Typescript
* Vite
* ReactReduxToolkit 
* Antdesign
* I18n 
* Vitest

### Run the application

* Fetch the project `https://github.com/giovanizanetti/Quiz.git`
* run `yarn` from your terminal to install all the dependencies
* run 'yarn run dev to start the project
* run 'yarn test and start the tests

### Check the Deployed version here 👇🏻
xxxxxxxxxxxxx










