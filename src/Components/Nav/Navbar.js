import React, {useState} from 'react'
import './Navbar.scss'
import {ReactComponent as HoopsyLogo} from '../../Assets/HoopsyLogo.svg'

function Navbar() {
  const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false)
  const handleToggleBurgerMenu = () => toggleBurgerMenu(!isBurgerMenuOpen)
  return (
    <div className="navbar">
      <div className="burger" onClick={handleToggleBurgerMenu}>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
      </div>
      <div className="logo">
        <HoopsyLogo />
      </div>
      <nav className={isBurgerMenuOpen ? "burgerMenuOpen" : ""}>
        <div>Register</div>
        <div>About us</div>
        <div>Contact</div>
      </nav>
    </div>
  )
}

export default Navbar
