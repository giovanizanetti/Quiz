import { createSlice } from '@reduxjs/toolkit'
import { LEVEL } from '../constants'

export type TLevel = (typeof LEVEL)[keyof typeof LEVEL]

interface IQuestion {
  type: 'multiple' | 'boolean'
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  difficulty: typeof LEVEL
}

interface IQuizState {
  level: TLevel
  category: { id: number; name: string }
  currentQuestion: IQuestion | null
  correctQuestions: IQuestion[] | null
  incorrectQuestions: IQuestion[] | null
  timer: null | number
}

const initialState: IQuizState = {
  level: LEVEL.medium,
  category: {
    id: 9,
    name: 'General Knowledge',
  },
  currentQuestion: null,
  correctQuestions: null,
  incorrectQuestions: null,
  timer: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectLevel: (state, action) => {
      const level = action.payload
      return { ...state, level }
    },
    resetQuiz: () => initialState,
  },
})

export const { selectLevel, resetQuiz } = quizSlice.actions
export default quizSlice.reducer
