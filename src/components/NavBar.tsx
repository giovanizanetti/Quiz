import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { IRootState } from '../store'
import { getQuestionsCount } from '../helpers/quiz'
import Timer from './Timer'

const { Header } = Layout

export const NavBar: React.FC = () => {
  const quizState = useSelector((state: IRootState) => state.quiz)
  const questionNumber = quizState.questionNumber
  const level = quizState.level
  const isAnswering = quizState.questionNumber

  const counter = `${questionNumber} / ${getQuestionsCount(level)}`
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
        }}
      >
        <div
          className="logo"
          style={{
            float: 'left',
            fontSize: '20px',
            width:'50%'
          }}
        >
          MyQuiz
        </div>
        <span>
          <Timer initialSeconds={60} />
          {isAnswering && <span style={{ float: 'right' }}>{counter}</span>}
        </span>
      </Header>
    </Layout>
  )
}
