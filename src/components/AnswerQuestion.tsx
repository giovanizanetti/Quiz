import { Button, Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffectOnce } from '../helpers/react'
import { TFetchQuestionsAction, fetchQuestions } from '../store/questionsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import {
  IQuestion,
  resetQuiz,
  setCurrentQuestion,
  setFinished,
  setQuestionNumber,
  submitAnswer,
} from '../store/quizSlice'
import { UtilCentered } from './UtilCentered'
import { useEffect, useState } from 'react'
import { AntDesignOutlined, PoundCircleFilled } from '@ant-design/icons'

export const AnswerQuestion = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch: TAppDispatch = useDispatch()

  useEffectOnce(() => {
    dispatch(fetchQuestions() as unknown as TFetchQuestionsAction)
  })

  const [answer, setAnswer] = useState<string | null>(null)
  const [hoverIndex, setHoverIndex] = useState<null | number>(null)

  const questionNumber = params.questionNumber
  const questionIndex = Number(questionNumber) - 1
  const questions = useSelector((state: IRootState) => state.questions)

  const currentQuestion: IQuestion | null =
    questions?.data?.[questionIndex] || null

  const options = currentQuestion?.incorrect_answers.concat([
    currentQuestion.correct_answer,
  ])

  useEffect(() => {
    //TODO: FIX those to run once
    if (currentQuestion) {
      dispatch(setCurrentQuestion(currentQuestion))
    }

    if (questionNumber) {
      dispatch(setQuestionNumber(questionNumber))
    }
  }, [currentQuestion, questionNumber])

  const getCardStyle = (item: string, index: number) => {
    const hovered = index == hoverIndex
    const answered = item == answer
    const notAsweredHovered = hovered && !answered
    const red = '#FC4D3C'

    return {
      minWidth: 300,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 18,
      backgroundColor: notAsweredHovered
        ? red
        : answered
        ? 'transparent'
        : undefined,
      color: hovered || answered ? 'white' : undefined,
      fontWeight: notAsweredHovered ? 600 : 500,
      borderWidth: 3,
      borderColor: notAsweredHovered ? red : undefined,
    }
  }

  const handleSubmit = () => {
    if (!answer) console.warn('Not possible to submit. No answer was given.')
    dispatch(submitAnswer(answer))
    const isLastQuestion = questionNumber == questions.data.length
    setAnswer(null)
    if (isLastQuestion) {
      dispatch(setFinished())
      navigate(`/quiz/results`, { replace: true })
    } else {
      navigate(`/quiz/question/${Number(questionNumber) + 1}`, {
        replace: true,
      })
    }
  }

  const handleReset = () => {
    navigate('/')
    dispatch(() => resetQuiz())
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

        <Button
          disabled={!answer}
          onClick={() => handleSubmit()}
          style={{ margin: '2rem' }}
          type="primary"
          size="large"
          icon={<AntDesignOutlined />}
        >
          Submit
        </Button>

        <Button
          type="primary"
          size="large"
          icon={<PoundCircleFilled />}
          onClick={handleReset}
        >
          Reset quiz
        </Button>
      </UtilCentered>
    </section>
  )
}
