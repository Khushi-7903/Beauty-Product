import React, { useContext, useState, useRef, useEffect } from 'react';
import "./navbar.css";
import logo from "../../../public/img/logo1.png";
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import { StoreContext } from '../../Context/StoreContextProvider';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  // const searchInputRef = useRef(null);
  // const { getTotalCartAmount } = useContext(StoreContext);
  // const navigate = useNavigate()


  return (
    <div className='navbar'>
      <Link to={"/"}><img src={logo} alt="logo" className='logo' /></Link>

      <ul className='navbar-menu'>
        <Link to={"/"} onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <Link  to={'/product'} onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</Link>
        <a href='#footer' onClick={() => setMenu("Contactus")} className={menu === "Contactus" ? "active" : ""}>Contact us</a>
      </ul>

      <div className="navbar-right">
        {/* Icons */}
        <div className="navbar-icons">
          <div className="navbar-cart-icon">
            <Link to={"/cart"}><FiShoppingCart className="icon" /></Link>
            <div className= "dot"></div>
          </div>
            <button className="signin-btn" >
              <FiUser className="icon" />
              <span>Sign In</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;