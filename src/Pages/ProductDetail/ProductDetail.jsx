import React, { useContext } from 'react'
import "../ProductDetail/ProductDetail.css"
import { StoreContext } from '../../Context/StoreContextProvider'

const ProductDetail = ({filteredProducts}) => {

  const {addToCart} = useContext(StoreContext)

  return (
    <>
      <div className="products-grid">
        {
          filteredProducts.map((items, index) => {
            return (<div className="product-card" key={index}>
              <img src={items.product_image} alt={items.product_name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{items.product_name}</h3>
                <p className="product-brand">{items.brand}</p>
                <div className="product-rating">
                  <span className="rating">{items.rating} ★</span>
                  <span className="reviews">({items.reviews} reviews)</span>
                </div>
                <p className="product-price">₹{items.product_price}</p>
                <button className="add-to-cart-btn" onClick={()=>{addToCart(items)}} >Add to Cart</button>
              </div>
            </div>)
          })
        }
      </div>
    </>
  )
}

export default ProductDetail