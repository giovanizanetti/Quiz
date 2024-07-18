import { useState } from 'react'
import './App.css'
import LevelSelect from './components/LevelSelect'
import CategorySelect from './components/CategorySelect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz/question/:questionNumber" element={<span>QuaestionNumber</span>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
