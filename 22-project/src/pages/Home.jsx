import React, { useState } from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import './Home.css'

const Home = ({ products, onAddToCart, onQuickView }) => {
  const [filterPrice, setFilterPrice] = useState(150)
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = products.filter(p => p.price <= filterPrice)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className='home-page'>
      <Hero />
      
      <div className='home-filters'>
        <div className='filter-controls'>
          <div className='filter-item'>
            <label>Price Range:</label>
            <input 
              type='range' 
              min='0' 
              max='150' 
              value={filterPrice}
              onChange={(e) => setFilterPrice(parseFloat(e.target.value))}
              className='price-slider'
            />
            <span className='price-value'>${filterPrice.toFixed(2)}</span>
          </div>

          <div className='filter-item'>
            <label>Sort By:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className='sort-select'
            >
              <option value='popular'>Most Popular</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
              <option value='rating'>Highest Rated</option>
            </select>
          </div>

          <button 
            className='clear-btn'
            onClick={() => { setFilterPrice(150); setSortBy('popular'); }}
          >
            Clear Filters
          </button>

          <button className='view-all-btn' onClick={() => onQuickView(null)}>
            View All Products →
          </button>
        </div>
      </div>

      <Products 
        products={sortedProducts}
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
      />
    </div>
  )
}

export default Home
