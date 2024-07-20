import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { LEVEL, OPEN_DB_BASE_URL, QUESTION_TYPE } from '../constants'
import i18n from '../config/i18n'
import { IRootState } from '.'
import { IQuestion } from './quizSlice'

export type TQuestionType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]

export type TFetchQuestionsAction = AsyncThunk<
  IQuestion[],
  void,
  { state: IQuestionsState }
>

interface IQuestionsState {
  questions: IInitialState
}

interface IInitialState {
  loading: boolean
  errorMessaage: string
  success: boolean
  data: IQuestion[]
}

export const fetchQuestions: TFetchQuestionsAction = createAsyncThunk(
  'fetchQuestions',
  async (params, { getState }) => {
    const { quiz } = getState() as IRootState

    const category = quiz.category.id
    const difficulty = quiz.level

    const type =
      difficulty == LEVEL.easy
        ? QUESTION_TYPE.boolean
        : difficulty == LEVEL.hard
        ? QUESTION_TYPE.multiple
        : null

    const amount =
      difficulty == LEVEL.easy ? 5 : difficulty == LEVEL.medium ? 10 : 15
    let url = `${OPEN_DB_BASE_URL}/api.php?amount=${amount}&category=${category}&`

    if (type) {
      url += `type=${type}&`
    }

    const response = await fetch(url, {
      method: 'GET',
    })

    const data = await response.json()
    return data.results as IQuestion[]
  }
)

const initialState: IInitialState = {
  loading: false,
  errorMessaage: '',
  success: false,
  data: [],
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(fetchQuestions.fulfilled, (state, action) => {
        state.success = true
        state.loading = false
        state.data = action.payload
      }),
      builder.addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false
        state.errorMessaage =
          action.error.message || i18n.t('defaultErrorMessage')
      })
  },
})

export default questionsSlice.reducer
