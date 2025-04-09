import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContextProvider'
import { FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
  const { GetCartProduct , getProduct } = useContext(StoreContext)
  

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <table className="cart-table">
        <thead>
          <tr className="cart-header">
            <th>Product</th>
            <th>Name</th>
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
                  <td>₹{item.product_price}</td>
                  <td>
                    <FiX 
                      className="close-icon" 
                    />
                  </td>
                </tr>
              )
            
          })}
        </tbody>
      </table>

      {/* <div className="cart-summary">
        <div className="cart-totals">
          <h2>Order Summary</h2>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>₹{getTotalCartAmount()}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>₹{getTotalCartAmount()===0 ? 0 : 2}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span>
            <span>₹{getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+2}</span>
          </div>
          <button className="checkout-button" onClick={()=> navigate('/placeorder')}>Proceed to Checkout</button>
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
      </div> */}
    </div>
  )
}

export default Cart