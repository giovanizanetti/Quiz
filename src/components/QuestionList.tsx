import { Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffectOnce } from '../helpers/react'
import { TFetchQuestionsAction, fetchQuestions } from '../store/questionsSlice'

export const QuestionList = () => {
  const selectAnswer = (value: string) => console.log(value)

  const dispatch: TAppDispatch = useDispatch()

  const questions = useSelector((state: IRootState) => state.questions)

  useEffectOnce(() => {
    dispatch(fetchQuestions() as unknown as TFetchQuestionsAction)
  })

  return[]

  // return questions.map((item) => (
  //   <Space style={{ cursor: 'pointer' }} direction="vertical" align="center">
  //     <Card onClick={() => selectAnswer('M<Y answer')} size="small">
  //       {item.question}
  //     </Card>
  //   </Space>
  // ))
}
