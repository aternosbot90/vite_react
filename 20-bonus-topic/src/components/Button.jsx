import React from 'react'
import './Button.css'

const Button = ({ theme, changeTheme }) => {
  return (
    <nav className="navbar">
      <button onClick={changeTheme} className="theme-btn">
        {theme === 'light' ? '🌙' : '☀️'} Change Theme
      </button>
    </nav>
  )
}

export default Button
