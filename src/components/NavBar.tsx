import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { IRootState } from '../store'
import { getInitialTimer, getQuestionsCount } from '../helpers/quiz'
import Timer from './Timer'
import { useState } from 'react'

const { Header } = Layout

export const NavBar: React.FC = () => {
  const quizState = useSelector((state: IRootState) => state.quiz)
  const questions = useSelector((state: IRootState) => state.questions)
  const finished = useSelector((state: IRootState) => state.quiz.finished)

  const questionNumber = quizState.questionNumber
  const level = quizState.level
  const isAnswering = quizState.questionNumber

  const counter = `${questionNumber} / ${getQuestionsCount(level)}`
  const isLastQuestion = questionNumber == questions.data.length

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
            width: '50%',
          }}
        >
          MyQuiz
        </div>
        <span>
          {isAnswering && (
            <>
              {!finished && (
                <Timer
                  initialSeconds={getInitialTimer(quizState.level)}
                  key={questionNumber}
                />
              )}
              <span style={{ float: 'right' }}>{counter}</span>
            </>
          )}
        </span>
      </Header>
    </Layout>
  )
}
