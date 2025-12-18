import React from 'react'
import './Cart.css'

const Cart = ({ items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (items.length === 0) {
    return (
      <section className='cart-section'>
        <div className='empty-cart'>
          <div className='empty-icon'>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some shades to get started!</p>
        </div>
      </section>
    )
  }

  return (
    <section className='cart-section'>
      <div className='cart-container'>
        <h2 className='cart-title'>Shopping Cart</h2>

        <div className='cart-content'>
          <div className='cart-items'>
            {items.map(item => (
              <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.name} className='cart-item-image' />

                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  <p className='item-price'>${item.price}</p>
                </div>

                <div className='cart-item-quantity'>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input 
                    type='number' 
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min='1'
                  />
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className='cart-item-total'>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <button 
                  className='remove-btn'
                  onClick={() => onRemove(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <h3>Order Summary</h3>
            
            <div className='summary-row'>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <div className='summary-row'>
              <span>Shipping:</span>
              <span className='free'>FREE</span>
            </div>
            
            <div className='summary-row'>
              <span>Tax:</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>

            <div className='summary-divider'></div>

            <div className='summary-row total'>
              <span>Total:</span>
              <span>${(total + total * 0.1).toFixed(2)}</span>
            </div>

            <button className='checkout-btn'>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
