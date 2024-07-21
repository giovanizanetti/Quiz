import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { Button } from 'antd'
import { UtilCentered } from '../components/UtilCentered'
import { useNavigate } from 'react-router-dom'
import { setRetry } from '../store/quizSlice'

export const Results: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: TAppDispatch = useDispatch()

  const quizState = useSelector((state: IRootState) => state.quiz)
  const incorrectAnswersCount = useSelector(
    (state: IRootState) => state.quiz.incorrectAnswersCount
  )

  const { correctAnswersCount } = quizState

  const points = <h2>Points: {quizState.points}</h2>

  const correctCounter = <div>{`Correct count: ${correctAnswersCount}`}</div>
  const incorrectCounter = (
    <div>
      {`Incorrect count 🙁: ${incorrectAnswersCount}`}

      <Button
        onClick={() => goToRetry()}
        style={{ margin: '2rem' }}
        type="primary"
        size="large"
      >
        Re-try
      </Button>
    </div>
  )

  const goToRetry = () => {
    const questionNumber = +1
    dispatch(setRetry())
    navigate(`/quiz/question/retry/${questionNumber}`)
  }

  if (incorrectAnswersCount < 1) {
    return (
      <section>
        <UtilCentered>
          <p>Well Done you've got it all right?</p>
          {points}
        </UtilCentered>
      </section>
    )
  } else {
    return (
      <section style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <UtilCentered>
          {points}
          {correctCounter}
          {incorrectCounter}
        </UtilCentered>
      </section>
    )
  }
}
