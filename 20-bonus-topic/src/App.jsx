import React, { useState, useEffect } from 'react'
import Button from './components/Button.jsx'

const App = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
      const saved = localStorage.getItem('theme') || 'light'
      setTheme(saved)
      document.body.setAttribute('data-theme', saved)
    }, [])

    const changeTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      document.body.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }

  return (
    <div className="container">
      <h1>Current Theme: {theme}</h1>
      <Button theme={theme} changeTheme={changeTheme} />
    </div>
  )
}

export default App