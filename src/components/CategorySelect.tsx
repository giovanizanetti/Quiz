import React, { useEffect } from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { TAppDispatch } from '../store'

import {
  ICategoriesState,
  ICategory,
  TFetchCategoryAction,
  fetchCategories,
} from '../store/categoriesSlice'

const App: React.FC = () => {
  const { t } = useTranslation()
  const dispatch: TAppDispatch = useDispatch()

  const getFormattedItems = (data: ICategory[]): MenuProps['items'] => {
    return data
      .map((item: ICategory) => ({
        key: item.id,
        label: item.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
  }

  const items = useSelector((state: ICategoriesState) => state.categories.data)

  useEffect(() => {
    dispatch(fetchCategories() as unknown as TFetchCategoryAction)
  }, [])

  const label = capitalize(t('select-type', { type: t('category') }))

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items: getFormattedItems(items)  }} placement="bottom">
          <Button>{label}</Button>
        </Dropdown>
      </Space>
    </Space>
  )
}
export default App
