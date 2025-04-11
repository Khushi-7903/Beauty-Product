import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContextProvider'

const PlaceOrder = () => {

   const { getTotalCartAmount  , getProduct , removeFromCart } = useContext(StoreContext)
    const Producttotal = getTotalCartAmount();
    const shipping = Producttotal > 0 ? 10 : 0;
    const total = Producttotal + shipping;


  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
          <button className="checkout-button">Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder