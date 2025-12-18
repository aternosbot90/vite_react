import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

const Products = ({ products, onAddToCart, onQuickView }) => {
  return (
    <section className='products-section' id='shop'>
      <div className='products-container'>
        <h2 className='products-title'>Our Collection</h2>
        <p className='products-subtitle'>Choose from our wide range of premium sunglasses</p>

        <div className='products-grid'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
