import { Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffectOnce } from '../helpers/react'
import { TFetchQuestionsAction, fetchQuestions } from '../store/questionsSlice'
import { useRoutes, useParams } from 'react-router-dom'
import { IQuestion } from '../store/quizSlice'
import { UtilCentered } from './UtilCentered'
import { useState } from 'react'

export const QuestionList = () => {
  const dispatch: TAppDispatch = useDispatch()

  const selectAnswer = (value: string) => console.log(value)

  const [answer, setAnswer] = useState<string | null>(null)
  const [hoverIndex, setHoverIndex] = useState<null | number>(null)

  const questionNumber = useParams().questionNumber
  const questionIndex = Number(questionNumber) - 1
  const questions = useSelector((state: IRootState) => state.questions)

  const currentQuestion: IQuestion | null =
    questions?.data?.[questionIndex] || null

  const options = currentQuestion?.incorrect_answers.concat([
    currentQuestion.correct_answer,
  ])

  useEffectOnce(() => {
    console.log(options, 'Options')
    dispatch(fetchQuestions() as unknown as TFetchQuestionsAction)
  })

  const getCardStyle = (item: string, index: number) => {
    const hovered = index == hoverIndex
    const answered = item == answer

    const red = '#FC4D3C'

    return {
      minWidth: 300,
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: 18,
      backgroundColor: hovered ? red : answered ? 'transparent' : undefined,
      color: hovered || answered ? 'white' : undefined,
      fontWeight: hovered ? 600 : 500,
      borderWidth: '3px',
      borderColor: hovered ? red : undefined
    }
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
      </UtilCentered>
    </section>
  )
}
