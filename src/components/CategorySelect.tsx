import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'

import {
  IInitialCategoriesState,
  ICategory,
  TFetchCategoryAction,
  fetchCategories,
} from '../store/categoriesSlice'
import { useEffectOnce } from '../helpers/react'
import { selectCategory } from '../store/quizSlice'
import { UtilSelector, ISelectorOption } from './UtilSelector'

export const CategorySelect: React.FC = () => {
  const dispatch: TAppDispatch = useDispatch()

  const categories = useSelector(
    (state: { categories: IInitialCategoriesState }) => state.categories.data
  )

  useEffectOnce(() => {
    dispatch(fetchCategories() as unknown as TFetchCategoryAction)
  })

  const category: ICategory = useSelector(
    (state: IRootState) => state.quiz.category
  )

  const getFormattedItems = (data: ICategory[]): ISelectorOption[] => {
    return data
      .map((item: ICategory) => ({
        value: item.id,
        label: item.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
  }

  const handleChange = (
    _: string,
    option?: ISelectorOption | ISelectorOption[]
  ) => {
    dispatch(selectCategory(option))
  }

  return (
    <UtilSelector
      onChange={handleChange}
      options={getFormattedItems(categories)}
      type="category"
      defaultValue={category.name}
    />
  )
}
export default CategorySelect
