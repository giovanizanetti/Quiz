import { useSelector } from 'react-redux'
import { IRootState } from '../store'
import { Button, Card, List, Space } from 'antd'
import { useEffect, useState } from 'react'
import { UtilCentered } from '../components/UtilCentered'

export const Results: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null)
  const quizState = useSelector((state: IRootState) => state.quiz)
  const incorrectAnswersCount = useSelector(
    (state: IRootState) => state.quiz.incorrectAnswersCount
  )

  const { correctAnswersCount, questionsIncorrectlyAnswered } = quizState

  const points = <h2>Points: {quizState.points}</h2>

  const correctCounter = <div>{`Correct count: ${correctAnswersCount}`}</div>
  const incorrectCounter = (
    <div>{`Incorrect count: ${incorrectAnswersCount}`}</div>
  )

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
    const dataSource = questionsIncorrectlyAnswered

    const getCardStyle = (index: number) => {
      const hovered = index == hoverIndex
      const red = '#FC4D3C'

      return {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        backgroundColor: hovered ? red : undefined,
        color: hovered ? 'white' : undefined,
        borderWidth: 3,
        borderColor: hovered ? red : undefined,
      }
    }

    return (
      <section style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <UtilCentered>
          {points}
          {correctCounter}
          {incorrectCounter}
          <h3>Incorrect Questions</h3>
          <p style={{ paddingRight: '2rem', paddingLeft: '2rem' }}>
            Do you want to give another try? Click on the question to change
            your answer.
          </p>

          <Space
            style={{ cursor: 'pointer' }}
            direction="vertical"
            align="center"
          >
            {dataSource.map((item, index) => (
              <Card
                onClick={() => onclick}
                size="small"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                key={index}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', marginRight: '1rem' }}>
                    🙁
                  </span>
                  <span>{item.question}</span>
                </div>
              </Card>
            ))}
          </Space>

          {/* <Button
          disabled={!answer}
          onClick={() => handleSubmit()}
          style={{ margin: '2rem' }}
          type="primary"
          size="large"
          icon={<AntDesignOutlined />}
        >
          Submit
        </Button> */}
        </UtilCentered>
      </section>
    )
  }
}
