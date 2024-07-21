import { createSlice } from '@reduxjs/toolkit'
import { LEVEL, QUESTION_TYPE } from '../constants'
import { ISelectorOption } from '../components/UtilSelector'
import { retry } from '@reduxjs/toolkit/query'

export type TLevel = (typeof LEVEL)[keyof typeof LEVEL]
export type Ttype = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]

export interface IQuestion {
  type: Ttype
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  difficulty: TLevel
}

export interface IQuizState {
  level: TLevel
  category: { id: number; name: string }
  currentQuestion: IQuestion | null
  correctAnswersCount: number
  questionsCorrectlyAnswered: IQuestion[]
  questionsIncorrectlyAnswered: IQuestion[]
  incorrectAnswersCount: number
  timer: null | number
  points: number
  questionNumber: number | null
  isAnswering: boolean
  finished: boolean
  retrying: boolean
}

const initialState: IQuizState = {
  level: LEVEL.medium,
  category: {
    id: 9,
    name: 'General Knowledge',
  },
  currentQuestion: null,
  correctAnswersCount: 0,
  incorrectAnswersCount: 0,
  questionsCorrectlyAnswered: [],
  questionsIncorrectlyAnswered: [],
  timer: null,
  points: 0,
  questionNumber: null,
  isAnswering: false,
  finished: false,
  retrying: false,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestionNumber: (state, { payload }) => {
      const questionNumber = payload
      return { ...state, questionNumber }
    },
    setQuestionCount: (state, { payload }) => {
      const questionsCount = payload
      return { ...state, questionsCount }
    },
    selectLevel: (state, { payload }) => {
      const level = payload
      return { ...state, level }
    },
    setCurrentQuestion: (state, { payload }) => {
      const isAnswering = true
      const currentQuestion = payload
      return { ...state, currentQuestion, isAnswering }
    },
    selectCategory: (state, { payload }) => {
      const { value, label } = payload as ISelectorOption
      const category = { id: value, name: label }
      return { ...state, category }
    },
    setFinished: (state) => {
      const finished = true
      const isAnswering = false
      return { ...state, finished, isAnswering }
    },
    resetQuiz: (state) => {
      return { ...initialState }
    },
    setRetry: (state) => {
      const retrying = true
      return { ...state, retrying }
    },
    submitAnswer: (state, { payload }) => {
      const { currentQuestion } = state
      const isCorrect = payload == currentQuestion?.correct_answer
      if (isCorrect) {
        const correctAnswersCount = state.correctAnswersCount + 1

        const questionsCorrectlyAnswered = [
          ...state.questionsCorrectlyAnswered,
          currentQuestion,
        ] as IQuestion[]

        const points =
          currentQuestion?.type == QUESTION_TYPE.boolean
            ? state.points + 5
            : state.points + 10

        return {
          ...state,
          points,
          correctAnswersCount,
          questionsCorrectlyAnswered,
        }
      } else {
        const incorrectAnswersCount = state.incorrectAnswersCount + 1
        const questionsIncorrectlyAnswered = [
          ...state.questionsIncorrectlyAnswered,
          currentQuestion,
        ] as IQuestion[]
        return { ...state, incorrectAnswersCount, questionsIncorrectlyAnswered }
      }
    },

    submitRetryAnswer: (state, { payload }) => {
      const { currentQuestion } = state
      const isCorrect = payload == currentQuestion?.correct_answer

      console.log('CALLED', payload)


      if (isCorrect) {
        const questionsIncorrectlyAnswered = [...state.questionsIncorrectlyAnswered.filter(answer => answer.question !== currentQuestion?.question)]
        const correctAnswersCount = state.correctAnswersCount + 1
        const incorrectAnswersCount = state.correctAnswersCount - 1
        const questionsCorrectlyAnswered = [
          ...state.questionsCorrectlyAnswered,
          currentQuestion,
        ] as IQuestion[]

        const points =
          currentQuestion?.type == QUESTION_TYPE.boolean
            ? state.points + 5
            : state.points + 10

        return {
          ...state,
          points,
          correctAnswersCount,
          questionsCorrectlyAnswered,
          questionsIncorrectlyAnswered,
          incorrectAnswersCount
        }
      } else {

        

        console.log('IS INCORRECT')
        return {...state}
      }
    },
  },
})

export const {
  selectLevel,
  resetQuiz,
  selectCategory,
  submitAnswer,
  submitRetryAnswer,
  setCurrentQuestion,
  setQuestionNumber,
  setFinished,
  setRetry,
} = quizSlice.actions
export default quizSlice.reducer
