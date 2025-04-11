import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContextProvider'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = ({ setShowLogin, user }) => {
  const { getTotalCartAmount, getProduct, removeFromCart, updateCartQuantity } = useContext(StoreContext)
  const Producttotal = getTotalCartAmount();
  const shipping = Producttotal > 0 ? 10 : 0;
  const total = Producttotal + shipping;
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      navigate('/placeorder');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className='cart'>
      <table className="cart-table">
        <thead>
          <tr className="cart-header">
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getProduct.map((item, index) => {
            return (
              <tr key={index} className="cart-item">
                <td>
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="cart-item-image"
                  />
                </td>
                <td>{item.product_name}</td>
                <td className="quantity-controls">
                  <FiMinus
                    onClick={() => item.quantity > 1 && updateCartQuantity(item.id, item.quantity - 1)}
                    className="qty-icon"
                  />
                  <span>{item.quantity}</span>
                  <FiPlus
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="qty-icon"
                  />
                </td>
                <td>₹{(item.product_price * item.quantity).toFixed(2)}</td>
                <td>
                  <FiX
                    className="close-icon"
                    onClick={() => removeFromCart(item.id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="cart-totals">
          <h2>Order Summary</h2>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>₹{Producttotal.toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>₹{shipping}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button 
            className="checkout-button" 
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="promo-section">
          <h3>Apply Promo Code</h3>
          <div className="promo-input">
            <input
              type="text"
              placeholder="Enter promo code"
              className="promo-code"
            />
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart