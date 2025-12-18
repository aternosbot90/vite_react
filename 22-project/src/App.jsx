import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AllProducts from './pages/AllProducts'
import Footer from './components/Footer'
import { productAPI } from './services/productAPI'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await productAPI.getAllProducts()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError('Failed to load products')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product, qty = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: qty }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const handleQuickView = (product) => {
    if (product === null) {
      setCurrentPage('all-products')
    } else {
      setSelectedProduct(product)
      setCurrentPage('product-detail')
    }
  }

  const handleViewAllProducts = () => {
    setCurrentPage('all-products')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  const handleShopClick = () => {
    setCurrentPage('all-products')
  }

  if (loading) {
    return (
      <div className='app'>
        <Navbar 
          cartCount={cartItems.length} 
          onCartClick={() => setCurrentPage(currentPage === 'cart' ? 'home' : 'cart')}
          onLogoClick={handleBackToHome}
          onShopClick={handleShopClick}
          currentPage={currentPage}
        />
        <div className='loading-page'>
          <div className='spinner'></div>
          <h2>Loading products...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='app'>
        <Navbar 
          cartCount={cartItems.length} 
          onCartClick={() => setCurrentPage(currentPage === 'cart' ? 'home' : 'cart')}
          onLogoClick={handleBackToHome}
          onShopClick={handleShopClick}
          currentPage={currentPage}
        />
        <div className='error-page'>
          <h2>❌ {error}</h2>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className='app'>
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setCurrentPage(currentPage === 'cart' ? 'home' : 'cart')}
        onLogoClick={handleBackToHome}
        onShopClick={handleShopClick}
        currentPage={currentPage}
      />

      <div className='page-container'>
        {currentPage === 'home' && (
          <Home 
            products={products}
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack={handleBackToHome}
            onViewAll={handleViewAllProducts}
          />
        )}

        {currentPage === 'all-products' && (
          <AllProducts
            products={products}
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onBack={handleBackToHome}
          />
        )}

        {currentPage === 'cart' && (
          <div className='cart-page'>
            {cartItems.length === 0 ? (
              <div className='empty-cart-page'>
                <div className='empty-icon'>🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some shades to get started!</p>
                <button className='continue-btn' onClick={handleBackToHome}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className='cart-container'>
                <h2>Shopping Cart</h2>
                <div className='cart-items-list'>
                  {cartItems.map(item => (
                    <div key={item.id} className='cart-item-row'>
                      <img src={item.image} alt={item.name} />
                      <div className='cart-item-info'>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                      </div>
                      <div className='quantity-control'>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <input type='number' value={item.quantity} readOnly />
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <span className='item-total'>${(item.price * item.quantity).toFixed(2)}</span>
                      <button className='remove-item' onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  ))}
                </div>
                <div className='cart-total'>
                  <h3>Total: ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
                  <button className='checkout-btn'>Proceed to Checkout</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
