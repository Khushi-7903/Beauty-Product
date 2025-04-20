import React, { createContext, useEffect, useState } from 'react';
import { product_list, productsPage } from '../assets/Data/assets';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [Search, setSearch] = useState("")
  const [getProduct, setGetProduct] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

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
      GetCartProduct();
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Something went wrong");
    }
  };

  // search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleBrandChange = (e) => setSelectedBrand(e.target.value);

  // filter products based on search input
  const filteredProducts = productsPage.filter((item) => {
    const matchesSearch = item.product_name.toLowerCase().includes(Search.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    const matchesBrand = selectedBrand === "" || item.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand ;
  });


  // get data
  const GetCartProduct = async () => {
    const get = await axios.get("http://localhost:3000/AddtocartProduct")
    setGetProduct(get.data)
  }

  useEffect(() => {
    GetCartProduct()
  }, [])

  useEffect(() => {
    // console.log("Cart items:", getProduct);
  }, [getProduct]);

  //remove data
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/AddtocartProduct/${id}`);
      GetCartProduct();
      alert("Item removed from cart");
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Failed to remove item");
    }
  };

  // quantity
  const updateCartQuantity = async (id, quantity) => {
    try {
      await axios.patch(`http://localhost:3000/AddtocartProduct/${id}`, { quantity });
      GetCartProduct();
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert("Failed to update quantity");
    }
  };

  // total
  const getTotalCartAmount = () => {
    return getProduct.reduce((total, item) => {
      const price = parseFloat(item.product_price);
      const quantity = parseInt(item.quantity) || 1;

      if (isNaN(price)) return total;

      return total + price * quantity;
    }, 0);
  };

  const contextValue = {
    product_list,
    addToCart,
    handleSearch,
    getProduct,
    GetCartProduct,
    removeFromCart,
    getTotalCartAmount,
    updateCartQuantity,
    filteredProducts,
    productsPage,
    handleCategoryChange,
    handleBrandChange,
    selectedCategory,
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
