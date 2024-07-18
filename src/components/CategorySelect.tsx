import { Select, Tooltip } from 'antd'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'

import {
  ICategoriesState,
  ICategory,
  TFetchCategoryAction,
  fetchCategories,
} from '../store/categoriesSlice'
import { useEffectOnce } from '../helpers/react'
import { ICategoryOption, IQuizState, selectCategory } from '../store/quizSlice'

const App: React.FC = () => {
  const { t } = useTranslation()
  const dispatch: TAppDispatch = useDispatch()

  const categories = useSelector(
    (state: ICategoriesState) => state.categories.data
  )

  useEffectOnce(() => {
    dispatch(fetchCategories() as unknown as TFetchCategoryAction)
  })

  const category: ICategory = useSelector(
    (state: IRootState) => state.quiz.category
  )

  const getFormattedItems = (data: ICategory[]): ICategoryOption[] => {
    return data
      .map((item: ICategory) => ({
        value: item.id,
        label: item.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
  }

  const tooltip = capitalize(t('select-type', { type: t('category') }))

  const handleChange = (
    value: string,
    option: ICategoryOption | ICategoryOption[]
  ) => {
    dispatch(selectCategory(option))
  }

  return (
    <Tooltip title={tooltip}>
      <Select
        defaultValue={category.name}
        style={{ width: 300 }}
        onChange={handleChange}
        options={getFormattedItems(categories)}
      />
    </Tooltip>
  )
}
export default App
