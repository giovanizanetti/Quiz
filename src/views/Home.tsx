import { LevelSelect } from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Space } from 'antd'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'
import { useNavigate } from 'react-router-dom'
import { UtilButton } from '../components/UtilButton'
import { useEffectOnce } from '../helpers/react'
import { useDispatch } from 'react-redux'
import { resetQuiz } from '../store/quizSlice'

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

export const Home: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const buttonLabel = capitalize(t('start-type', { type: t('quiz') }))
  const goToQuiz = () => navigate('quiz/question/1')

  useEffectOnce(() => {
    dispatch(resetQuiz())
  })

  return (
    <Space
      style={{
        ...styleCenter,
        flexDirection: 'column',
      }}
    >
      <h2>Click to select a level and category</h2>

      <Space wrap style={styleCenter}>
        <LevelSelect />
        <CategorySelect />
      </Space>

      <UtilButton onClick={goToQuiz}>{buttonLabel}</UtilButton>
    </Space>
  )
}
