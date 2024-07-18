import LevelSelect from '../components/LevelSelect'
import CategorySelect from '../components/CategorySelect'
import { Space } from 'antd'

const Home = () => (
  <Space wrap>
    <LevelSelect />
    <CategorySelect />
  </Space>
)

export default Home
