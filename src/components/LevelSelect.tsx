import React from 'react'
import { Select, Tooltip } from 'antd'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'
import { LEVEL } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { TAppDispatch } from '../store'
import { TLevel, selectLevel } from '../store/quizSlice'

const App: React.FC = () => {
  const { t } = useTranslation()

  const dispatch: TAppDispatch = useDispatch()
  
  const level = useSelector((state: any) => state.quiz.level)

  const items = Object.values(LEVEL).map((item) => ({
    value: item,
    label: capitalize(t(item)),
  }))

  const tooltip = capitalize(t('select-type', { type: t('level') }))

  const handleChange = (value: TLevel) => dispatch(selectLevel(value))

  return (
    <Tooltip title={tooltip}>
      <Select
        defaultValue={level}
        style={{ width: 120 }}
        onChange={handleChange}
        options={items}
      />
    </Tooltip>
  )
}
export default App
