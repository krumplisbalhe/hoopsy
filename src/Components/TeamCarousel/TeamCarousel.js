import React from 'react'
import './TeamCarousel.scss'

function TeamCarousel() {
  const teams=[1,2,3,4,5,6,7]
  return (
    <div className="teamCarousel">
      {teams.map( (item, index) =>(
        <div className="teamLogo" key={index}>
          {item}
        </div>
      ))}
      {teams.map( (item, index) =>(
        <div className="teamLogo" key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default TeamCarousel
