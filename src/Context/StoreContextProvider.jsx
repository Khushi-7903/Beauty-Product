import React, { createContext, useEffect, useState } from 'react';
import { product_list, productsPage } from '../assets/Data/assets';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [Search, setSearch] = useState("")
  const [getProduct, setGetProduct] = useState([])



  // add to cart
  const addToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/AddtocartProduct?_id=${item._id}`);
      console.log("Check response data:", res.data);

      if (res.data.length > 0) {
        alert(`${item.product_name} is already in the cart`);
        return;
      }

      await axios.post("http://localhost:3000/AddtocartProduct", item);
      alert(`${item.product_name} added to cart`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Something went wrong");
    }
  };


  // search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // filter products based on search input
  const filteredProducts = productsPage.filter((item) => {
    return item.product_name.toLowerCase().includes(Search.toLowerCase())
  })

  // get data
  const GetCartProduct = async () => {
      const get = await axios.get("http://localhost:3000/AddtocartProduct")
      setGetProduct(get.data)
    }
  
    useEffect(() => {
      GetCartProduct()
    }, [])
    

  const contextValue = {
    product_list,
    addToCart,
    handleSearch,
    getProduct,
    GetCartProduct,
    filteredProducts,
    productsPage
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
