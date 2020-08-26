import React, {useState} from 'react'
import './Navbar.scss'

function Navbar({}) {
  const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false)
  const handleToggleBurgerMenu = () => toggleBurgerMenu(!isBurgerMenuOpen)
  return (
    <div className="navbar">
      <div className="burger" onClick={handleToggleBurgerMenu}>burger</div>
      <div className="logo">logo</div>
      <nav className={isBurgerMenuOpen ? "burgerMenuOpen" : ""}>
        <div>Register</div>
        <div>About us</div>
        <div>Contact</div>
      </nav>
    </div>
  )
}

export default Navbar
