import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './AllProducts.css'

const AllProducts = ({ products, onAddToCart, onQuickView, onBack }) => {
  const [sortBy, setSortBy] = useState('popular')
  const [filterPrice, setFilterPrice] = useState(150)
  const [selectedCategories, setSelectedCategories] = useState(['all'])
  const [minRating, setMinRating] = useState(0)

  const filteredProducts = products.filter(p => {
    const priceMatch = p.price <= filterPrice
    const ratingMatch = p.rating >= minRating
    const categoryMatch = selectedCategories.includes('all') ||
      (selectedCategories.includes('premium') && p.price > 90) ||
      (selectedCategories.includes('budget') && p.price <= 90)
    return priceMatch && ratingMatch && categoryMatch
  })

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

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSelectedCategories(['all'])
    } else {
      let newCategories = selectedCategories.filter(c => c !== 'all')
      if (newCategories.includes(category)) {
        newCategories = newCategories.filter(c => c !== category)
        if (newCategories.length === 0) {
          newCategories = ['all']
        }
      } else {
        newCategories.push(category)
      }
      setSelectedCategories(newCategories)
    }
  }

  const handleRatingChange = (rating) => {
    setMinRating(rating)
  }

  const clearFilters = () => {
    setFilterPrice(150)
    setSortBy('popular')
    setSelectedCategories(['all'])
    setMinRating(0)
  }

  return (
    <div className='all-products-page'>
      <div className='products-header'>
        <button className='back-btn' onClick={onBack}>← Back</button>
        <h1>All Products</h1>
        <p className='products-count'>Showing {sortedProducts.length} products</p>
      </div>

      <div className='products-wrapper'>
        <aside className='filters-sidebar'>
          <div className='filter-group'>
            <h3>Price Range</h3>
            <input 
              type='range' 
              min='0' 
              max='150' 
              value={filterPrice}
              onChange={(e) => setFilterPrice(parseFloat(e.target.value))}
              className='price-slider'
            />
            <div className='price-display'>
              <span>$0</span>
              <span className='current-price'>${filterPrice.toFixed(2)}</span>
              <span>$150</span>
            </div>
          </div>

          <div className='filter-group'>
            <h3>Sort By</h3>
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

          <div className='filter-group'>
            <h3>Categories</h3>
            <div className='category-list'>
              <label>
                <input 
                  type='checkbox' 
                  checked={selectedCategories.includes('all')}
                  onChange={() => handleCategoryChange('all')}
                />
                All Shades ({products.length})
              </label>
              <label>
                <input 
                  type='checkbox' 
                  checked={selectedCategories.includes('premium') && !selectedCategories.includes('all')}
                  onChange={() => handleCategoryChange('premium')}
                />
                Premium ({products.filter(p => p.price > 90).length})
              </label>
              <label>
                <input 
                  type='checkbox' 
                  checked={selectedCategories.includes('budget') && !selectedCategories.includes('all')}
                  onChange={() => handleCategoryChange('budget')}
                />
                Budget ({products.filter(p => p.price <= 90).length})
              </label>
            </div>
          </div>

          <div className='filter-group'>
            <h3>Rating</h3>
            <div className='rating-filter'>
              <label>
                <input 
                  type='checkbox' 
                  checked={minRating === 4}
                  onChange={() => handleRatingChange(minRating === 4 ? 0 : 4)}
                />
                ⭐⭐⭐⭐⭐ (4+)
              </label>
              <label>
                <input 
                  type='checkbox' 
                  checked={minRating === 3 && minRating !== 4}
                  onChange={() => handleRatingChange(minRating === 3 ? 0 : 3)}
                />
                ⭐⭐⭐⭐ (3+)
              </label>
              <label>
                <input 
                  type='checkbox' 
                  checked={minRating === 2 && minRating !== 3 && minRating !== 4}
                  onChange={() => handleRatingChange(minRating === 2 ? 0 : 2)}
                />
                ⭐⭐⭐ (2+)
              </label>
            </div>
          </div>

          <button className='clear-filters-btn' onClick={clearFilters}>
            Clear All Filters
          </button>
        </aside>

        <div className='products-grid-section'>
          {sortedProducts.length > 0 ? (
            <div className='products-grid'>
              {sortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          ) : (
            <div className='no-products'>
              <h2>No products found</h2>
              <p>Try adjusting your filters</p>
              <button className='reset-btn' onClick={() => setFilterPrice(150)}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
