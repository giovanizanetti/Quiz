import { configureStore } from '@reduxjs/toolkit'
import quizReducer, { IQuizState } from './quizSlice'
import categoriesReducer, { ICategoriesState } from './categoriesSlice'
import questionsReducer, { IQuestionsState } from './questionsSlice'

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
  categories: ICategoriesState
  questions: IQuestionsState
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
