import { createSlice, current } from '@reduxjs/toolkit'
import { B_POINTS, LEVEL, MC_POINTS, QUESTION_TYPE } from '../constants'
import { ISelectorOption } from '../components/UtilSelector'

export type TLevel = (typeof LEVEL)[keyof typeof LEVEL]
export type Ttype = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]

export interface IQuestion {
  type: Ttype
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  difficulty: typeof LEVEL
}

export interface IQuizState {
  level: TLevel
  category: { id: number; name: string }
  currentQuestion: IQuestion | null
  correctQuestionsCount: number
  incorrectQuestionsCount: number
  timer: null | number
  points: number
  questionNumber: number | null
  questionsCount: 0
}

const initialState: IQuizState = {
  level: LEVEL.medium,
  category: {
    id: 9,
    name: 'General Knowledge',
  },
  currentQuestion: null,
  correctQuestionsCount: 0,
  incorrectQuestionsCount: 0,
  timer: null,
  points: 0,
  questionNumber: null,
  questionsCount: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestionNumber: (state, { payload }) => {
      const questionNumber = payload
      return { ...state, questionNumber }
    },
    setQuestionCount: (state, {payload}) => {
      const questionsCount = payload
      return { ...state ,questionsCount}
    },
    selectLevel: (state, { payload }) => {
      const level = payload
      return { ...state, level }
    },
    setCurrentQuestion: (state, { payload }) => {
      const currentQuestion = payload
      return { ...state, currentQuestion }
    },
    selectCategory: (state, { payload }) => {
      const { value, label } = payload as ISelectorOption
      const category = { id: value, name: label }
      return { ...state, category }
    },
    resetQuiz: () => initialState,

    submitAnswer: (state, { payload }) => {
      const { currentQuestion } = state
      const isCorrect = payload == currentQuestion?.correct_answer

      if (isCorrect) {
        const points =
          currentQuestion?.type == QUESTION_TYPE.boolean
            ? state.points + 5
            : state.points + 10

        return { ...state, points }
      }
    },
  },
})

export const {
  selectLevel,
  resetQuiz,
  selectCategory,
  submitAnswer,
  setCurrentQuestion,
  setQuestionNumber,
} = quizSlice.actions
export default quizSlice.reducer
