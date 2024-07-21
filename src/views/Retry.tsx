import { UtilCentered } from '../components/UtilCentered'
import { AnswerQuestion } from '../components/AnswerQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffect, useState } from 'react'
import { submitRetryAnswer } from '../store/quizSlice'

export const Retry: React.FC = () => {
  const dispatch: TAppDispatch = useDispatch()

  const questions = useSelector(
    (state: IRootState) => state.quiz.questionsIncorrectlyAnswered
  )

  const currentQuestion = useSelector(
    (state: IRootState) => state.quiz.currentQuestion
  )

  const [options, setOptions] = useState<string[] | null>(null)

  useEffect(() => {
    if (currentQuestion) {
      setOptions(
        currentQuestion?.incorrect_answers.concat([
          currentQuestion.correct_answer,
        ])
      )
    }
  }, [questions, currentQuestion])

  const handleSubmit = (answer: string, questionNumber: number) => {
    dispatch(submitRetryAnswer(answer))
    console.log('HANDLE SUBMIT')
  }

  return (
    <UtilCentered>
      {options?.length && (
        <AnswerQuestion
          questions={questions}
          handleSubmit={handleSubmit}
          options={options}
        />
      )}
    </UtilCentered>
  )
}
