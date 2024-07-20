import { LevelSelect } from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Button, Space } from 'antd'
import { AntDesignOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

export const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const buttonLabel = capitalize(t('start-type', { type: t('quiz') }))

  const goToQuiz = () => navigate('quiz/question/1')

  const onClick = () => {
    goToQuiz()
  }

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
        onClick={onClick}
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
