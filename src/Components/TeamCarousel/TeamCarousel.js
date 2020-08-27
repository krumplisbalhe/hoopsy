import React, {useState} from 'react'
import './TeamCarousel.scss'
import Teams from './TeamData'

const TeamCarousel = () => {
  const [selectedColors, setSelectedColors] = useState(null)
  console.log(selectedColors)
  return (
    <div className="teamCarousel">
      {Teams.map( (item, index) =>(
        <div className="teamLogo" key={index} alt={item.name} onClick={() => setSelectedColors(item.colors[0])}>
          <img src={require(`./../../Assets/NBA_logos/${item.logo}`)}></img>
        </div>
      ))}
      {Teams.map( (item, index) =>(
        <div className="teamLogo" key={index} alt={item.name} onClick={() => setSelectedColors(item.colors[0])}>
          <img src={require(`./../../Assets/NBA_logos/${item.logo}`)}></img>
        </div>
      ))}
    </div>
  )
}

export default TeamCarousel
