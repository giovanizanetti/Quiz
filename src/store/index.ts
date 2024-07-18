import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'

const store = configureStore({
  reducer: {
    quiz: quizReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
