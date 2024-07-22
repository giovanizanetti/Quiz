
# My Quiz App

This quiz application was made as an assignment for a frontend job position.

### Description

The user is presented with a home page where they can select a category and the level before answering the quiz.

Mediun is the default level, General Knowledge is the default category

* According to the level, the user is presented with one of the settings👇🏻

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

* **Routing**: By starting the quiz, the user is redirected to `/quiz/question{question_number}`.

* **Results** view: After the last question, the user is presented with the results view containing the summary of points, correct and incorrect count.

* **Retry**: The user can **retry** the incorrect questions. The user is redirected to `/quiz/question/rety{question_number}`

* **Timer**: ach question has a timer according to the options above 👆🏼

* **Reset**: The user can **reset** the quiz from any question or from the results page.

* **Language Selector**: The uner can choos among (English, Dutch or Portuguese)

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
* run `yarn` run dev to start the project
* run `yarn` test and start the tests

### Check the deployed version here 👇🏻

https://my-quiz-super-app.netlify.app/











