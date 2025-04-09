import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { StoreContext } from '../../Context/StoreContextProvider';

const ProductDisplay = ({ category }) => {

  const { product_list , addToCart} = useContext(StoreContext);

  return (
    <div className='product-display ' id='product-display'>
      <h2>Top Prroducts near you</h2>
      <div className="product-display-list">
        {product_list.map((item, index) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return (
              <div className="product-list" key={index}>
                <div className='product-item' >
                  <div className="product-item-img-container">
                    <img src={item.product_image} alt={item.product_name} className='product-item-img' />
                  </div>
                  <div className="product-item-info">
                    <p className='product-item-name'>{item.product_name}</p>
                    <p className="product-item-desc">{item.product_description}</p>
                    <div className="price-counter d-flex justify-content-between">
                      <p className='product-item-price'>₹{item.product_price}</p>
                      <button
                        className='btn btn-primary addTocart-btn'
                        onClick={() => addToCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })
        }
      </div>
    </div>
  )
}

export default ProductDisplay