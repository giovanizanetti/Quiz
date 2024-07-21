import { configureStore } from '@reduxjs/toolkit'
import quizReducer, { IQuizState } from './quizSlice'
import categoriesReducer, { IInitialCategoriesState } from './categoriesSlice'
import questionsReducer, { IInitialQuestionState } from './questionsSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    categories: categoriesReducer,
    questions: questionsReducer,
  },
  devTools: true,
})

export interface IRootState {
  quiz: IQuizState
  categories: IInitialCategoriesState
  questions: IInitialQuestionState
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
