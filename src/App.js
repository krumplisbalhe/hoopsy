import React from 'react'
import './App.css'
import Navbar from './Components/Nav/Navbar'
import UseViewportWidth from './Hooks/UseViewportWidth'
import LandingPage from './Sections/LandingPage/LandingPage'
import LoginPage from './Sections/LoginPage/LoginPage'

function App() {
  const {viewportWidth} = UseViewportWidth()
  const mobileBreakpoint = 600
  const isMobile = viewportWidth < mobileBreakpoint
  return (
    <div className="App">
      <Navbar isMobile={isMobile} />
      <LandingPage />
      <LoginPage />
    </div>
  )
}

export default App
