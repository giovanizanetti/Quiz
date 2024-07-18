import LevelSelect from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Button, Space } from 'antd'
import { AntDesignOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'
import { useNavigate } from 'react-router-dom'

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const Home = () => {
  const { t } = useTranslation()
const navigate = useNavigate()

  const buttonLabel = capitalize(t('start-type', { type: t('quiz') }))
  const handleClick = () => navigate('quiz/question/1')

  return (
    <Space
      style={{
        ...styleCenter,
        flexDirection: 'column',
      }}
    >
      <Space wrap style={styleCenter}>
        <LevelSelect />
        <CategorySelect />
      </Space>
      <Button
        onClick={handleClick}
        style={{ margin: '2rem' }}
        type="primary"
        size="large"
        icon={<AntDesignOutlined />}
      >
        {buttonLabel}
      </Button>
    </Space>
  )
}

export default Home
