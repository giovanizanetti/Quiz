import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { getInitialTimer, getQuestionsCount } from '../helpers/quiz'
import { Timer } from './Timer'
import { useNavigate } from 'react-router-dom'
import { setIncorrectQuestion } from '../store/quizSlice'
import { RED } from '../constants'
import LanguageSelector from './LanguageSelector'

const { Header } = Layout

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: TAppDispatch = useDispatch()
  const quizState = useSelector((state: IRootState) => state.quiz)
  const questions = useSelector((state: IRootState) => state.questions.data)
  const isAnswering = useSelector((state: IRootState) => state.quiz.isAnswering)
  const questionNumber = quizState.questionNumber
  const level = quizState.level

  const isRetrying = useSelector((state: IRootState) => state.quiz.retrying)

  const counter = `${questionNumber} / ${
    !isRetrying
      ? getQuestionsCount(level)
      : quizState.questionsIncorrectlyAnswered?.length
  }`
  const goToQuiz = () => navigate(`quiz/question/${Number(questionNumber) + 1}`)
  const handleTimeOut = () => {
    const isLastQuestion = Number(questionNumber) == questions.length

    if (!isLastQuestion) {
      goToQuiz()
      dispatch(() => setIncorrectQuestion(quizState.currentQuestion))
    } else {
      navigate(`/quiz/results`, { replace: true })
    }
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          color: 'white',
          top: 0,
          justifyContent: 'space-around',
          background: RED,
        }}
      >
        <div
          className="logo"
          style={{
            float: 'left',
            fontSize: '30px',
            width: '50%',
          }}
        >
          MyQuiz
        </div>
        <span>
          {isAnswering && (
            <>
              {isAnswering && (
                <Timer
                  initialSeconds={getInitialTimer(quizState.level)}
                  onTimmedOut={() => handleTimeOut()}
                  key={questionNumber}
                />
              )}
            </>
          )}
        </span>
        <span style={{ float: 'right' }}>
          {isAnswering && (
            <span
              style={{ marginRight: '3rem', fontSize: '1rem', fontWeight: 'bold' }}
            >
              {counter}
            </span>
          )}
          <LanguageSelector />
        </span>
      </Header>
    </Layout>
  )
}
