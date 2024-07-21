import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { UtilCentered } from '../components/UtilCentered'
import { useNavigate } from 'react-router-dom'
import { setRetry } from '../store/quizSlice'
import { UtilButton } from '../components/UtilButton'

export const Results: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: TAppDispatch = useDispatch()

  const quizState = useSelector((state: IRootState) => state.quiz)
  const incorrectAnswers = useSelector(
    (state: IRootState) => state.quiz.questionsIncorrectlyAnswered
  )

  const incorrectAnswersCount = incorrectAnswers?.length

  const { correctAnswersCount } = quizState

  const points = <h1>Points: {quizState.points}</h1>

  const correctCounter = <h3>{`Correct count: ${correctAnswersCount}`}<span style={{ fontSize: '2rem', margin:'1rem'}}>😀</span></h3>
  const incorrectCounter = (
    <div>
      <h3>{`Incorrect count : ${incorrectAnswersCount}`}<span style={{ fontSize: '2rem', margin:'1rem'}}>🙁</span></h3>

      <UtilButton onClick={() => goToRetry()}>Re-try</UtilButton>
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
          <p style={{fontSize:'2rem', padding: '1rem'}}>
            Well Done you've got it all right!{' '}
            <span style={{ fontSize: '10rem' }}>🎉</span>
          </p>
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
