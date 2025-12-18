import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-content'>
        <h1 className='hero-title'>Find Your Perfect Shades</h1>
        <p className='hero-subtitle'>Premium sunglasses for every style and season</p>
        <button className='hero-btn'>Shop Now</button>
      </div>
      <div className='hero-overlay'></div>
    </section>
  )
}

export default Hero
