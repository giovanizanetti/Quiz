import React from 'react'
import { Select, Tooltip } from 'antd'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'

export interface ISelectorOption {
  value: number
  label: string
}

interface IProps {
  options: ISelectorOption[]
  onChange: (
    value: string,
    option?: ISelectorOption | ISelectorOption[]
  ) => void
  type: 'level' | 'category'
  defaultValue: string
}

const App: React.FC<IProps> = ({ options, onChange, type, defaultValue }) => {
  const { t } = useTranslation()
  const tooltip = capitalize(t('select-type', { type }))

  return (
    <Tooltip title={tooltip}>
      <Select
        defaultValue={defaultValue}
        style={{ width: 300, textAlign: 'center' }}
        onChange={onChange}
        options={options}
      />
    </Tooltip>
  )
}
export default App
