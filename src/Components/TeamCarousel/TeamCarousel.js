import React, {useState} from 'react'
import Teams from './TeamData'
import './TeamCarousel.scss'

const TeamCarousel = ({handleTeamClick}) => {
  const [activeTeam, setActiveTeam] = useState('')
  return (
    <div className="teamCarouselWrapper">
      <div className="teamCarousel">
        {Teams.map((item, index) =>(
          <div
            className="teamLogo"
            key={index}
            onClick={() => {
              handleTeamClick(item.colors)
              setActiveTeam(item.name)
            }}
          >
            <img
              className={`teamLogoImage ${activeTeam === item.name ? "active" : ""}`}
              src={require(`./../../Assets/NBA_logos/${item.logo}`)}
              alt={item.name}
            />
          </div>
        ))}
        {Teams.map((item, index) =>(
          <div
            className="teamLogo"
            key={index}
            onClick={() => {
              handleTeamClick(item.colors)
              setActiveTeam(item.name)
            }}
          >
            <img
              className={`teamLogoImage ${activeTeam === item.name ? "active" : ""}`}
              src={require(`./../../Assets/NBA_logos/${item.logo}`)}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamCarousel
