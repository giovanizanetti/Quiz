import { Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useNavigate } from 'react-router-dom'
import {
  IQuestion,
  resetQuiz,
  setCurrentQuestion,
  setQuestionNumber,
} from '../store/quizSlice'
import { UtilCentered } from './UtilCentered'
import { useEffect, useState } from 'react'
import { RED } from '../constants'
import { UtilButton } from './UtilButton'
import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'

export const AnswerQuestion: React.FC<{
  retry?: boolean
  questions: IQuestion[]
  options: string[]
  handleSubmit: (answer: string, questionNumber: number) => void
  questionNumber: number
}> = ({ questions, handleSubmit, options, questionNumber }) => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const dispatch: TAppDispatch = useDispatch()

  const [answer, setAnswer] = useState<string | null>(null)
  const [hoverIndex, setHoverIndex] = useState<null | number>(null)

  const currentQuestion = useSelector(
    (state: IRootState) => state.quiz.currentQuestion
  )

  const questionIndex = Number(questionNumber) - 1

  useEffect(() => {
    if (questionNumber) {
      const current: IQuestion | null = questions?.[questionIndex] || null
      dispatch(setQuestionNumber(questionNumber))
      dispatch(setCurrentQuestion(current))
    }
  }, [questionNumber, questionIndex, questions])

  const getCardStyle = (item: string, index: number) => {
    const hovered = index == hoverIndex
    const answered = item == answer
    const notAsweredHovered = hovered && !answered

    return {
      minWidth: 300,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 18,
      backgroundColor: notAsweredHovered
        ? RED
        : answered
        ? 'transparent'
        : undefined,
      color: hovered || answered ? 'white' : undefined,
      fontWeight: notAsweredHovered ? 600 : 500,
      borderWidth: 3,
      borderColor: notAsweredHovered ? RED : undefined,
    }
  }

  const handleReset = () => {
    dispatch(resetQuiz())
    navigate('/')
  }

  const onsubmit = () => {
    if (!answer)
      return console.warn('Not possible to submit. No answer was given.')

    handleSubmit(answer, questionNumber as unknown as number)
    setAnswer(null)
  }

  return (
    <section style={{ marginTop: '-12rem' }}>
      <h2 style={{ padding: '2rem' }}>{currentQuestion?.question}</h2>

      <UtilCentered>
        <Space
          style={{ cursor: 'pointer' }}
          direction="vertical"
          align="center"
        >
          {options?.map((item, index) => (
            <Card
              onClick={() => setAnswer(item)}
              size="small"
              style={getCardStyle(item, index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              key={index}
            >
              {item}
            </Card>
          ))}
        </Space>

        <span>
          <UtilButton onClick={handleReset}>
            <span>X </span> {t('resetQuiz')}
          </UtilButton>
          <UtilButton disabled={!answer} onClick={() => onsubmit()}>
            {capitalize(t('submit'))}
          </UtilButton>
        </span>
      </UtilCentered>
    </section>
  )
}
