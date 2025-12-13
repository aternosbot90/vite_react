import React from 'react'
import './Navbar.css'

const Navbar = ({ theme, changeTheme }) => {
  return (
    <nav className="navbar">
      <button onClick={changeTheme} className="theme-btn">
        {theme === 'light' ? '🌙' : '🌞'} Change Theme
      </button>
    </nav>
  )
}

export default Navbar