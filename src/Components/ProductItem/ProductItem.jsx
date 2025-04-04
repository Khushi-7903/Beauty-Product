import React, { useContext, useState } from 'react'
import "./ProductItem.css"
import { StoreContext } from '../../Context/StoreContextProvider'

const ProductItem = ({ id, name, price, description, image }) => {

    const {cartItem,addToCart,removeFromCart}=useContext(StoreContext)

    return (
        <div className='product-item'>
            <div className="product-item-img-container">
                <img src={image} alt="" className='product-item-img'/>
            </div>
            <div className="product-item-info">
                <p className='product-item-name'>{name}</p>
                <p className="product-item-desc">
                    {description}
                </p>
                <div className="price-counter d-flex justify-content-between">
                    <p className='product-item-price'>₹{price}</p>
                    {!cartItem[id]
                        ?
                        <i className="fa-solid fa-plus" onClick={()=>addToCart(id)}></i>
                        : <div className='product-item-counter'>
                            <i className="fa-solid fa-plus" onClick={() => addToCart(id)}></i>
                            {cartItem[id]}
                            <i className="fa-solid fa-minus" onClick={() => removeFromCart(id)}></i>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItem