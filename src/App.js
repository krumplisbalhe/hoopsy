import React from 'react'
import './App.css'
import Navbar from './Nav/Navbar'
import UseViewportWidth from './Hooks/UseViewportWidth'
import TeamCarousel from './TeamCarousel/TeamCarousel'

function App() {
  const {viewportWidth} = UseViewportWidth()
  const mobileBreakpoint = 600
  const isMobile = viewportWidth < mobileBreakpoint
  return (
    <div className="App">
      <Navbar isMobile={isMobile} />
      <TeamCarousel />
    </div>
  )
}

export default App
