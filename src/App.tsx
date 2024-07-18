import { useState } from 'react'
import './App.css'
import LevelSelect from './components/LevelSelect'
import CategorySelect from './components/CategorySelect'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LevelSelect />
      <CategorySelect />
    </>
  )
}

export default App
