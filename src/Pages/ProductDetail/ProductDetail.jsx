import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContextProvider';
import "../ProductDetail/ProductDetail.css"

const ProductDetail = ({filterdata}) => {
  const { productsPage } = useContext(StoreContext);
  return (
    <>
      <div className="products-grid">
        {filterdata.map((product) => (
          <div className="product-card" key={product.id}>
            {product.isBestseller && (
              <div className="bestseller-badge">Bestseller</div>
            )}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">{product.brand}</p>
              <div className="product-rating">
                <span className="rating">{product.rating} ★</span>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductDetail