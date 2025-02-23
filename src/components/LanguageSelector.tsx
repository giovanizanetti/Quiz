import React from 'react'
import { Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import type { MenuProps } from 'antd'
import { LANGUAGE } from '../constants'

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    i18n.changeLanguage(e.key)
  }

  const menu: MenuProps = {
    items: Object.values(LANGUAGE).map((item) => {
      return {
        key: item,
        label: item.toUpperCase(),
      }
    }),
    onClick: handleMenuClick,
  }

  return (
    <Dropdown menu={menu}>
      <Button>
        {i18n.language.toUpperCase()} <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default LanguageSelector
