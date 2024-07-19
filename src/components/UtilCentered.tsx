import { Space } from 'antd'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const UtilCentered: React.FC<IProps> = ({ children }) => {
  const styleCenter = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }
  return (
    <Space
      style={{
        ...styleCenter,
        flexDirection: 'column',
      }}
    >
      {children}
    </Space>
  )
}
