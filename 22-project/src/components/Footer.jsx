import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>ShadePro offers premium sunglasses for every style and budget. Quality and style combined.</p>
        </div>

        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#shop'>Shop</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Customer Service</h4>
          <ul>
            <li><a href='#shipping'>Shipping Info</a></li>
            <li><a href='#returns'>Returns</a></li>
            <li><a href='#warranty'>Warranty</a></li>
            <li><a href='#faq'>FAQ</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Contact</h4>
          <p>Email: support@shadepro.com</p>
          <p>Phone: 1-800-SHADES-1</p>
          <div className='social-links'>
            <a href='#facebook'>f</a>
            <a href='#twitter'>𝕏</a>
            <a href='#instagram'>📷</a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2024 ShadePro. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
