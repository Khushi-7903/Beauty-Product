import React, { useContext, useState } from 'react';
import './Product.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { StoreContext } from '../../Context/StoreContextProvider';

const Product = () => {
  const { productsPage } = useContext(StoreContext);
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("")
  const [selectCategory, setSelectCategory] = useState("")
  const [selectType, setSelectType] = useState("")
  const [selectBrand, setSelectBrand] = useState("")
  const [SkinType, setSkinType] = useState("")
  const [minPrice, setMinPrice] = useState(0); // New state for minimum price
  const [maxPrice, setMaxPrice] = useState(1000); // New state for maximum price

  // search
  const SearchName = (e) => {
    setSearch(e.target.value)
  }

  // Filter logic
  const filterdata = productsPage.filter((users) => {
    const matchesSearch =
      users?.name?.toLowerCase().includes(search.toLowerCase()) ||
      users?.brand?.toLowerCase().includes(search.toLowerCase()) ||
      users?.category?.toLowerCase().includes(search.toLowerCase()) ||
      users?.type?.toLowerCase().includes(search.toLowerCase()) ||
      users?.skinType?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectCategory === "" ||
      selectCategory === "All" ||
      users?.category === selectCategory;

    const matchesType =
      selectType === "" ||
      selectType === "All" ||
      users?.type === selectType;

    const matchesBrand =
      selectBrand === "" ||
      selectBrand === "All" ||
      users?.brand === selectBrand;

    const matchesSkinType =
      SkinType === "" ||
      SkinType === "All" ||
      users?.skinType === SkinType;

    const matchesPriceRange =
      users?.price >= minPrice && users?.price <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType &&
      matchesBrand &&
      matchesSkinType &&
      matchesPriceRange
    );
  });

  // Filters
  const selectCategoryItem = (e) => {
    setSelectCategory(e.target.value)
  }
  const selectProductTypeItem = (e) => {
    setSelectType(e.target.value)
  }

  const selectProductBrandItem = (e) => {
    setSelectBrand(e.target.value)
  }

  const selectSkinTypeItem = (e) => {
    setSkinType(e.target.value)
  }

  const filterCategory = [...new Set(productsPage.map((users) => users.category))];
  const filterType = [...new Set(productsPage.map((users) => users.type))];
  const filterBrand = [...new Set(productsPage.map((users) => users.brand))];
  const filterSkinType = [...new Set(productsPage.map((users) => users.skinType))];

  return (
    <div className="product-page">
      <div className="search-filter">
        <div className="Search-container">
          <input type="search" className='searchBox' placeholder='Search here' onChange={SearchName} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="filter-container d-flex">
        <i
          className={`fa-solid ${showFilters ? 'fa-xmark' : 'fa-bars-staggered'} filter-toggle`}
          onClick={() => setShowFilters(!showFilters)}
        />
        <div className={`filtersItem ${showFilters ? 'show' : ''}`}>
          <div className="AllfilterItems d-flex gap-3">
            <div className="category-container d-flex gap-2">
              <label htmlFor="Category">Category </label>
              <select onChange={selectCategoryItem}>
                <option value="">All</option>
                {
                  filterCategory.map((productcategory, index) => (
                    <option key={index} value={productcategory}>
                      {productcategory}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="type-container d-flex gap-2">
              <label htmlFor="Type">Type </label>
              <select onChange={selectProductTypeItem}>
                <option value="">All</option>
                {
                  filterType.map((productType, index) => (
                    <option key={index} value={productType}>
                      {productType}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="brand-container d-flex gap-2">
              <label htmlFor="brand">Brand </label>
              <select onChange={selectProductBrandItem}>
                <option value="">All</option>
                {
                  filterBrand.map((productBrand, index) => (
                    <option key={index} value={productBrand}>
                      {productBrand}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="SkinType-container d-flex gap-2">
              <label htmlFor="SkinType">Skin Type</label>
              <select onChange={selectSkinTypeItem}>
                <option value="">All</option>
                {
                  filterSkinType.map((skinType, index) => (
                    <option key={index} value={skinType}>
                      {skinType}
                    </option>
                  ))
                }
              </select>
            </div>
            {/* Price Range Filter */}
            <div className="price-container d-flex gap-2">
              <label htmlFor="PriceRange">Price Range</label>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min={0}
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetail filterdata={filterdata} />
    </div>
  );
};

export default Product;
