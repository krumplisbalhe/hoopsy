import React, {useEffect, useState} from 'react'
import TeamCarousel from '../../Components/TeamCarousel/TeamCarousel'
import Basketballer01 from '../../Assets//Basketball-01.gif'
import './LandingPage.scss'
import {ReactComponent as ButtonArrow} from '../../Assets/arrow.svg'

function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [themeColors, setThemeColors] = useState([])

  console.log(themeColors)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleTeamClick = colors => {
    setThemeColors(colors)
  }

  // const percentage = scrollPosition/window.innerHeight*100
  // console.log(percentage)

  return (
    <div className="landingPage">
      <h1 className="landingPageHeader" style={{color: themeColors[0]}}>Elevate your game</h1>
      <img
        src={Basketballer01}
        alt="Basketballer_Illustration_1"
        className="landingPageIllustration"
        style={{transform: `translateY(${scrollPosition}px)`}}
      >
      </img>
      <a href="#sectionLogin" className="buttonWrapper">
        <button>
          Log in
          <ButtonArrow />
        </button>
      </a>
      <TeamCarousel handleTeamClick={handleTeamClick} />
    </div>
  )
}

export default LandingPage
