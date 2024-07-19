import { Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffectOnce } from '../helpers/react'
import { TFetchQuestionsAction, fetchQuestions } from '../store/questionsSlice'
import { useRoutes, useParams } from 'react-router-dom'
import { IQuestion } from '../store/quizSlice'

export const QuestionList = () => {
  const dispatch: TAppDispatch = useDispatch()

  const selectAnswer = (value: string) => console.log(value)

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

  return (
    <>
      <Space style={{ cursor: 'pointer' }} direction="vertical" align="center">
        <h2>{currentQuestion?.question}</h2>
      </Space>
      <Space style={{ cursor: 'pointer' }} direction="vertical" align="center">
        {options?.map((item) => (
          <Card onClick={() => selectAnswer('M<Y answer')} size="small">
            {item}
          </Card>
        ))}
      </Space>
    </>
  )
}
