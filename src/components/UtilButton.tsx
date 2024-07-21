import { Button } from 'antd'
import { ReactNode } from 'react'
import { RED } from '../constants'
interface IProps {
  children: ReactNode
  onClick: () => void
  type?: 'primary' | 'neutral'
  disabled?: boolean
}

export const UtilButton: React.FC<IProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      style={{
        background: 'transparent',
        color: 'white',
        borderWidth: '5px',
        borderColor: RED,
        borderBlockStyle: 'solid',
        margin: '.5rem',
        width: '10rem',
        height: '3rem',
      }}
      onClick={onClick}
      size="large"
    >
      {children}
    </Button>
  )
}
