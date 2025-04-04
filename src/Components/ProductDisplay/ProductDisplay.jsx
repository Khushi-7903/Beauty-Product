import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { StoreContext } from '../../Context/StoreContextProvider';
import ProductItem from '../ProductItem/ProductItem';

const ProductDisplay = ({category}) => {

    const { product_list } = useContext(StoreContext);

  return (
    <div className='product-display ' id='product-display'>
        <h2>Top Prroducts near you</h2>
        <div className="product-display-list">
            {product_list.map((item, index) => {
                         console.log(category, item.category);
                        if (category==="All" || category===item.category) {
                          return <ProductItem key={index} id={item._id}  name={item.product_name} image={item.product_image} price={item.product_price} description={item.product_description}/>
                        }
                })
            }
        </div>
    </div>
  )
}

export default ProductDisplay