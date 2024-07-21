import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { IRootState } from '../store'
import { getInitialTimer, getQuestionsCount } from '../helpers/quiz'
import Timer from './Timer'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const { Header } = Layout

export const NavBar: React.FC = () => {
  const quizState = useSelector((state: IRootState) => state.quiz)
  // const questions = useSelector((state: IRootState) => state.questions)
  const isAnswering = useSelector((state: IRootState) => state.quiz.isAnswering)
  const questionNumber = quizState.questionNumber
  const level = quizState.level

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
