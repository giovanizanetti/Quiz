import LevelSelect from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Button, Space } from 'antd'
import { AntDesignOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const Home = () => {
  const { t } = useTranslation()

  const buttonLabel = capitalize(t('start-type', { type: t('quiz') }))
  const handleClick = () => console.log('Click')

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
