import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'
import categoriesReducer from './categoriesSlice'

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    categories: categoriesReducer,
  },
  devTools: true
})

export default store

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
