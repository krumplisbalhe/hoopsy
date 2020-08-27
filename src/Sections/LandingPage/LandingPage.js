import React from 'react'
import TeamCarousel from '../../Components/TeamCarousel/TeamCarousel'
import Basketballer01 from '../../Assets//Basketball-01.gif'
import './LandingPage.scss'

function LandingPage() {

  return (
    <div className="landingPage">
      <h1>Elevate your game</h1>
      <img src={Basketballer01} alt="Basketballer_Illustration_1"></img>
      <a href="#sectionLogin">
        <button>Sign in</button>
      </a>
      <TeamCarousel />
    </div>
  )
}

export default LandingPage
