import { UtilCentered } from '../components/UtilCentered'
import { AnswerQuestion } from '../components/AnswerQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffect, useState } from 'react'
import { setFinished, submitRetryAnswer } from '../store/quizSlice'
import { useNavigate, useParams } from 'react-router-dom'

export const Retry: React.FC = () => {
  const dispatch: TAppDispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()
  const questionNumber = Number(params.incorrectQuestionNumber)

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

    const isLastQuestion = questions.length == questionNumber

    if (isLastQuestion) {
      dispatch(setFinished())
      navigate(`/quiz/results`, { replace: true })
    } else {
      navigate(`/quiz/question/${Number(questionNumber) + 1}`, {
        replace: true,
      })
    }
  }

  return (
    <UtilCentered>
      {options?.length && (
        <AnswerQuestion
          questionNumber={questionNumber}
          questions={questions}
          handleSubmit={handleSubmit}
          options={options}
        />
      )}
    </UtilCentered>
  )
}
