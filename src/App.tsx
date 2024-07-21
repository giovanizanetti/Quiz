import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { NotFound } from './components/NotFound'
import { NavBar } from './components/NavBar'
import { Quiz } from './views/Quiz'
import { Results } from './views/Results'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz/question/:questionNumber" element={<Quiz />} />
          <Route path="quiz/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
