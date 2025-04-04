import React, { useState } from 'react';
import './Product.css';
import ProductDetail from '../ProductDetail/ProductDetail';

const Product = () => {

  return (
    <div className="product-page">
      <div className="search-filter">
        <div className="Search-container">
          <input type="search" className='searchBox' placeholder='Search here' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="filter-container d-flex">
        <i class="fa-solid fa-bars-staggered"></i>
        <i class="fa-solid fa-xmark"></i>
        <div className="filtersItem">
           <div className="category-container">
               <select>
                   <option value="select option">select option</option>
                   <option value="all">all</option>
                   <option value="makeup">makeup</option>
                   <option value="skincare">skincare</option>
               </select>
           </div>
        </div>
      </div>

      <ProductDetail />
    </div>
  );
};

export default Product;
