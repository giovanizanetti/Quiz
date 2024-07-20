import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { OPEN_DB_BASE_URL } from '../constants'
import i18n from '../config/i18n'
import { IQuizState } from './quizSlice'

export type TFetchCategoryAction = AsyncThunk<
  ICategory[],
  void,
  { state: ICategoriesState }
>

export interface ICategory {
  id: number
  name: string
}
export interface ICategoriesState {
  categories: IInitialState
}

interface IInitialState {
  loading: boolean
  errorMessaage: string
  success: boolean
  data: ICategory[]
}

const initialState: IInitialState = {
  loading: false,
  errorMessaage: '',
  success: false,
  data: [],
}

export const fetchCategories: TFetchCategoryAction = createAsyncThunk(
  'fetchCategories',
  async () => {
    const response = await fetch(`${OPEN_DB_BASE_URL}/api_category.php`, {
      method: 'GET',
    })
    const data = await response.json()
    return data.trivia_categories //todo type
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.success = true
        state.loading = false
        state.data = action.payload
      }),
      builder.addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        state.errorMessaage =
          action.error.message || i18n.t('defaultErrorMessage')
      })
  },
})

export default categoriesSlice.reducer
