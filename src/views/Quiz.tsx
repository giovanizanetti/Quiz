import { UtilCentered } from '../components/UtilCentered'
import { AnswerQuestion } from '../components/AnswerQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { useEffectOnce } from '../helpers/react'
import { TFetchQuestionsAction, fetchQuestions } from '../store/questionsSlice'
import {
  setFinished,
  setQuestionNumber,
  submitAnswer,
} from '../store/quizSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Quiz: React.FC = () => {
  const questions = useSelector((state: IRootState) => state.questions.data)
  const dispatch: TAppDispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const setQuestionNumber = Number(params.questionNumber)

  const currentQuestion = useSelector(
    (state: IRootState) => state.quiz.currentQuestion
  )

  const [options, setOptions] = useState<string[]>([])

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
    dispatch(submitAnswer(answer))
    const isLastQuestion = Number(questionNumber) == questions.length
    if (isLastQuestion) {
      dispatch(setFinished())
      navigate(`/quiz/results`, { replace: true })
    } else {
      navigate(`/quiz/question/${Number(questionNumber) + 1}`, {
        replace: true,
      })
    }
  }

  useEffectOnce(() => {
    dispatch(fetchQuestions() as unknown as TFetchQuestionsAction)
  })
  return (
    <UtilCentered>
      <AnswerQuestion
        questionNumber={setQuestionNumber}
        questions={questions}
        handleSubmit={handleSubmit}
        options={options}
      />
    </UtilCentered>
  )
}
