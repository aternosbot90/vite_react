import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.line}>dice</h3>
      <button className='btn'>login</button>
    </div>
  )
}

export default Header
