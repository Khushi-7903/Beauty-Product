import React, { useContext, useState } from 'react';
import './Product.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { StoreContext } from '../../Context/StoreContextProvider';

const Product = () => {

  const {filteredProducts , handleSearch} =useContext(StoreContext);

  return (
    <div className="product-page">
      <div className="search-filter">
        <div className="Search-container">
          <input type="search" className='searchBox' placeholder='Search here' onChange={handleSearch} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <ProductDetail filteredProducts={filteredProducts}/>
    </div>
  );
};

export default Product;
