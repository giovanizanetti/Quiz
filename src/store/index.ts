import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './reducers'

const store = configureStore({
  reducer: {
    quiz: quizReducer
  },
})

export default store
