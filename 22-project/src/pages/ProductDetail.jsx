import React, { useState } from 'react'
import './ProductDetail.css'

const ProductDetail = ({ product, onAddToCart, onBack, onViewAll }) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    setQuantity(1)
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className='product-detail-page'>
      <div className='product-detail-container'>
        <button className='back-btn' onClick={onBack}>← Back to Home</button>

        <div className='product-detail-content'>
          <div className='product-image-section'>
            <img src={product.image} alt={product.name} className='product-large-image' />
            <div className='product-badges'>
              <span className='badge-new'>NEW</span>
              <span className='badge-rating'>⭐ {product.rating}</span>
            </div>
          </div>

          <div className='product-details-section'>
            <h1 className='detail-product-name'>{product.name}</h1>
            <p className='detail-product-category'>Premium Sunglasses</p>

            <div className='rating-section'>
              <div className='stars'>
                {'⭐'.repeat(Math.floor(product.rating))}
              </div>
              <span className='rating-text'>({product.rating} out of 5)</span>
            </div>

            <div className='price-section'>
              <span className='price'>${product.price}</span>
              <span className='price-label'>Inclusive of all taxes</span>
            </div>

            <p className='detail-description'>{product.description}</p>

            <div className='product-details-list'>
              <h3>Product Details</h3>
              <p className='details-text'>{product.details}</p>
            </div>

            <div className='features-section'>
              <h3>Key Features</h3>
              <ul className='features-list'>
                <li>✓ 100% UV Protection</li>
                <li>✓ Durable & Lightweight</li>
                <li>✓ Comfortable Fit</li>
                <li>✓ Premium Quality Materials</li>
              </ul>
            </div>

            <div className='quantity-section'>
              <label>Quantity:</label>
              <div className='quantity-input'>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type='number' value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className='action-buttons'>
              <button className='add-to-cart-btn' onClick={handleAddToCart}>
                🛒 Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button className='view-all-btn' onClick={onViewAll}>
                View All Products
              </button>
            </div>

            <div className='shipping-info'>
              <p>📦 Free Shipping on orders above $100</p>
              <p>↩️ Easy 30-day Returns</p>
              <p>⭐ Secure & Fast Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
