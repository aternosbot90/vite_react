import React from 'react'
import './Navbar.css'

const Navbar = ({ cartCount, onCartClick, onLogoClick, currentPage, onShopClick }) => {
  const handleShopClick = (e) => {
    e.preventDefault()
    if (onShopClick) {
      onShopClick()
    } else {
      onLogoClick()
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo' onClick={onLogoClick} style={{ cursor: 'pointer' }}>
          <span className='logo-icon'>👓</span>
          <h1>ShadePro</h1>
        </div>

        <ul className='navbar-menu'>
          <li><a href='#home' onClick={(e) => { e.preventDefault(); onLogoClick(); }}>Home</a></li>
          <li><a href='#shop' onClick={handleShopClick}>Shop</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <button className='cart-btn' onClick={onCartClick}>
          🛒 {currentPage === 'cart' ? 'Back' : 'Cart'} <span className='cart-count'>{cartCount}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
