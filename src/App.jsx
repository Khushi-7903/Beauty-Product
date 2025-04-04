import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Product from './Pages/Product/Product'
import Register from './Components/LoginPopup/Register'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <>
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} user={user}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/product' element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        
        {showLogin && 
          <LoginPopup 
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
            setUser={setUser}
          />
        }
        
        {showRegister && 
          <Register 
            setShowRegister={setShowRegister}
            setShowLogin={setShowLogin}
            setUser={setUser}
          />
        }
      </div>
    </>
  )
}

export default App