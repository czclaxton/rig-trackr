import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import GHNavbar from '../components/NavBar/GHNavbar'

const App = () => {
  return (
    <>
      <GHNavbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
