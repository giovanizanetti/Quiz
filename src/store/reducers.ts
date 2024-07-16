import { createSlice } from '@reduxjs/toolkit'
import { LEVEL } from '../contants'

const initialState = {
  level: LEVEL.medium,
}
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectLevel: (state, action) => (state.level = action.payload),
    resetQuiz: (state) => (state = {...initialState}),
    // increment: state => {
    //   state.count += 1;
    // },
    // decrement: state => {
    //   state.count -= 1;
    // }
  },
})

export const { selectLevel, resetQuiz } = quizSlice.actions
export default quizSlice.reducer
