import React from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'
import { LEVEL } from '../contants'

const App: React.FC = () => {
  const { t } = useTranslation()

  const items: MenuProps['items'] = Object.values(LEVEL).map((item) => ({
    key: item,
    label: capitalize(t(item)),
  }))

  const label = capitalize(t('select-type', { type: t('level') }))

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottom">
          <Button>{label}</Button>
        </Dropdown>
      </Space>
    </Space>
  )
}
export default App
