import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'
import { OPEN_DB_BASE_URL } from '../constants'

const { t } = useTranslation()

export const fetchCategories: AsyncThunk<
  ICategory[],
  void,
  { state: ICategoriesState }
> = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch(`${OPEN_DB_BASE_URL}/api_category.php`)
  const data = await response.json()
  return data.trivia_categories as ICategory[]
})

export interface ICategory {
  id: string
  name: string
}
export interface ICategoriesState {
  loading: boolean
  errorMessaage: string
  success: boolean
  categories: ICategory[]
}

const initialState: ICategoriesState = {
  loading: false,
  errorMessaage: '',
  success: false,
  categories: [],
}

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
        state.categories = action.payload
      }),
      builder.addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        state.errorMessaage = action.error.message || t('defaultErrorMessage')
      })
  },
})

export default categoriesSlice.reducer
