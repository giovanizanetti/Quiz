import { configureStore } from '@reduxjs/toolkit'
import quizReducer, { IQuizState } from './quizSlice'
import categoriesReducer, { IInitialCategoriesState } from './categoriesSlice'
import questionsReducer, { IInitialQuestionState } from './questionsSlice'
import { loadState, saveState } from '../helpers/localStorage'


const preloadedState = loadState();
export const store = configureStore({
  preloadedState,
  reducer: {
    quiz: quizReducer,
    categories: categoriesReducer,
    questions: questionsReducer,
  },
  devTools: true,
})

store.subscribe(() => {
  saveState(store.getState());
});          

export interface IRootState {
  quiz: IQuizState
  categories: IInitialCategoriesState
  questions: IInitialQuestionState
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
