import { Card, Space } from 'antd'

export const Question = () => {
  const selectAnswer = (value: string) => console.log(value)

  return (
    <Space style={{ cursor: 'pointer' }} direction="vertical" align="center">
      <Card onClick={() => selectAnswer('M<Y answer')} size="small">
        Option B
      </Card>
    </Space>
  )
}
