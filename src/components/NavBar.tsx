import { Layout } from 'antd'

const { Header } = Layout

const App = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', top: 0 }}>
        <div
          className="logo"
          style={{
            float: 'left',
            color: 'white',
            fontSize: '20px',
            marginRight: '20px',
          }}
        >
          MyQuiz
        </div>
      </Header>
    </Layout>
  )
}

export default App
