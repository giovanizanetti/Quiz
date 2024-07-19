import { configureStore } from '@reduxjs/toolkit'
import quizReducer, { IQuizState } from './quizSlice'
import categoriesReducer, { ICategoriesState } from './categoriesSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    categories: categoriesReducer,
  },
  devTools: true,
})

export interface IRootState {
  quiz: IQuizState
  categories: ICategoriesState
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
