import React, { useContext, useState } from 'react';
import './Product.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { StoreContext } from '../../Context/StoreContextProvider';
import { option } from 'framer-motion/client';

const Product = () => {

  const {
    filteredProducts,
    handleSearch,
    handleCategoryChange,
    productsPage,
    handleBrandChange
  } = useContext(StoreContext);

  return (
    <div className="product-page">
      <div className="search-filter">
        <div className="Search-container">
          <input type="search" className='searchBox' placeholder='Search here' onChange={handleSearch} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="AllfilterItems">
        <div className="category-container">
          <label htmlFor="category">Category</label>
          <select name="category" onChange={handleCategoryChange}>
            <option value="">All</option>
            {
              [...new Set(productsPage.map(item => item.category))].map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div className="category-container">
          <label htmlFor="category">Brand</label>
          <select name="category" onChange={handleBrandChange}>
            <option value="">All</option>
            {
              [...new Set(productsPage.map(item => item.brand))].map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))
            }
          </select>
        </div>
      </div>

      <ProductDetail filteredProducts={filteredProducts} />
    </div>
  );
};

export default Product;