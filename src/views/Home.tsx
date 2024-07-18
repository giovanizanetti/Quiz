import LevelSelect from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Space } from 'antd'

const Home = () => (
  <Space wrap style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <LevelSelect />
    <CategorySelect />
  </Space>
)

export default Home
