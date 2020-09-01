import React, {useState, useEffect} from 'react'
import Navbar from './Components/Nav/Navbar'
import LandingPage from './Sections/LandingPage/LandingPage'
import LoginPage from './Sections/LoginPage/LoginPage'
import {ReactComponent as Facebook} from './Assets/facebook.svg'
import {ReactComponent as Instagram} from './Assets/instagram.svg'
import {ReactComponent as TikTok} from './Assets/tik-tok.svg'
import {ReactComponent as Youtube} from './Assets/youtube.svg'
import './App.scss'

const App = () => {
  const [themeColors, setThemeColors] = useState(JSON.parse(localStorage.getItem('themeColors')) || [])

  const handleTeamClick = colors => {
    setThemeColors(colors)
  }

  useEffect(() => {
    localStorage.setItem('themeColors', JSON.stringify(themeColors))
  }, [themeColors])

  return (
    <div className="App" style={{'--color1': themeColors[0], '--color2': themeColors[1]}}>
      <Navbar />
      <LandingPage handleTeamClick={handleTeamClick} />
      <LoginPage />
      <footer>
        <div className="copywrite">© Hoopsy 2020</div>
        <div className="contact">Say <span>hello@hoopsy.com</span></div>
        <div className="social">
          <Facebook />
          <Instagram />
          <TikTok />
          <Youtube />
        </div>
      </footer>
    </div>
  )
}

export default App
