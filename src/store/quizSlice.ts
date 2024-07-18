import { createSlice } from '@reduxjs/toolkit'
import { LEVEL } from '../constants'

const initialState = {
  level: LEVEL.medium,
}
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectLevel: (state, action) => {
      const level = action.payload
      return { ...state, level }
    },
    resetQuiz: (state) => initialState,
  },
})

export const { selectLevel, resetQuiz } = quizSlice.actions
export default quizSlice.reducer
