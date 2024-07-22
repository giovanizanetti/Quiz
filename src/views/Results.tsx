import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { UtilCentered } from '../components/UtilCentered'
import { useNavigate } from 'react-router-dom'
import { resetQuiz, setRetry } from '../store/quizSlice'
import { UtilButton } from '../components/UtilButton'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'

export const Results: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch: TAppDispatch = useDispatch()

  const quizState = useSelector((state: IRootState) => state.quiz)
  const incorrectAnswers = useSelector(
    (state: IRootState) => state.quiz.questionsIncorrectlyAnswered
  )

  const incorrectAnswersCount = incorrectAnswers?.length

  const { correctAnswersCount } = quizState

  const handleReset = () => {
    dispatch(resetQuiz())
    navigate('/')
  }

  const points = (
    <h1>
      {capitalize(t('points'))}: {quizState.points}
    </h1>
  )

  const counter = (
    <>
      <h3>
        {`${capitalize(t('correctCount'))}: ${correctAnswersCount}`}
        <span style={{ fontSize: '2rem', margin: '1rem' }}>😀</span>
      </h3>
      <h3>
        {`${capitalize(t('incorrectCount'))} : ${incorrectAnswersCount}`}
        <span style={{ fontSize: '2rem', margin: '1rem' }}>🙁</span>
      </h3>
    </>
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
          <p style={{ fontSize: '1.5rem', padding: '1rem' }}>
            {t('wellDoneMsg')}
            <span style={{ fontSize: '4rem'}}>🎉</span>
          </p>
          {points}
          <UtilButton onClick={handleReset}>
            <span>X </span> {t('resetQuiz')}
          </UtilButton>
        </UtilCentered>
      </section>
    )
  } else {
    return (
      <section style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <UtilCentered>
          {points}
          {counter}
          <UtilButton onClick={() => goToRetry()}>Re-try</UtilButton>

          <UtilButton onClick={handleReset}>
            <span>X </span> {t('resetQuiz')}
          </UtilButton>
        </UtilCentered>
      </section>
    )
  }
}
