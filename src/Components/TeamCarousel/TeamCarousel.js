import React, {useState} from 'react'
import './TeamCarousel.scss'
import Teams from './TeamData'

const TeamCarousel = ({handleTeamClick}) => {
  const [activeTeam, setActiveTeam] = useState('')
  return (
    <div className="teamCarouselWrapper">
      <div className="teamCarousel">
        {Teams.map( (item, index) =>(
          <div className="teamLogo" key={index} onClick={() => {handleTeamClick(item.colors); setActiveTeam(item.name)}}>
            <img className={`teamLogoImage ${activeTeam === item.name ? "active" : ""}`} src={require(`./../../Assets/NBA_logos/${item.logo}`)} alt={item.name}></img>
          </div>
        ))}
        {Teams.map( (item, index) =>(
          <div className="teamLogo" key={index} onClick={() => {handleTeamClick(item.colors); setActiveTeam(item.name)}}>
            <img className={`teamLogoImage ${activeTeam === item.name ? "active" : ""}`} src={require(`./../../Assets/NBA_logos/${item.logo}`)} alt={item.name}></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamCarousel
