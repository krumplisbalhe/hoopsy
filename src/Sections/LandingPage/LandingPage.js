import React, {useEffect, useState} from 'react'
import TeamCarousel from '../../Components/TeamCarousel/TeamCarousel'
import {ReactComponent as Player} from '../../Assets//Player.svg'
import './LandingPage.scss'
import {ReactComponent as ButtonArrow} from '../../Assets/arrow.svg'
import {ReactComponent as Ball} from '../../Assets/Ball.svg'

const LandingPage = ({handleTeamClick}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

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

  const percentage = scrollPosition/window.innerHeight*100
  console.log(percentage)

  return (
    <div className="landingPage">
      <h1 className="landingPageHeader">Elevate your game</h1>
      <div className="landingPageIllustration">
        <Player
        />
        <Ball
          className="ball"
          style={{transform: `translateY(${scrollPosition}px) rotate(${scrollPosition}deg)`}}
        />
      </div>
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
