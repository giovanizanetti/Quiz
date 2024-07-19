import { Layout } from 'antd'

const { Header } = Layout

export const NavBar = () => {
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
