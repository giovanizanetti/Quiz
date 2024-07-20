import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { NotFound } from './components/NotFound'
import { NavBar } from './components/NavBar'
import { Quiz } from './views/Quiz'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="quiz/question/:questionNumber" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
