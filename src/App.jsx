import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Product from './Pages/Product/Product'
import Login from './Components/LoginAndRegister/LoginPopup'
import Register from './Components/LoginAndRegister/Register'
import "./App.css"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleSetUser = (username) => {
    setUser(username);
    localStorage.setItem("username", username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  return (
    <>
      <div className="app">
        {loading ? (
          <div className="loader-container">
            <div className="loader">
              <div className="loader-ring"></div>
              <p className="loading-text">Loading your beauty essentials...</p>
            </div>
          </div>
        ) : (
          <>
            <Navbar setShowLogin={setShowLogin} user={user} setUser={handleLogout} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart setShowLogin={setShowLogin} user={user} />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/product" element={<Product />} />
            </Routes>
            <Footer />
            {showLogin && (
              <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister} setUser={handleSetUser} />
            )}

            {showRegister && (
              <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} setUser={handleSetUser} />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default App