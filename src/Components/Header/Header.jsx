// Header.jsx
import React from 'react'
import './Header.css'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="beauty-header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1>Elevate Your Beauty Ritual</h1>
        <p className="tagline">Organic • Vegan • Luxurious</p>
        <p className="description">
          Discover bespoke skincare solutions crafted with clinical precision
          and botanical excellence
        </p>
        <Link to={'/product'}>
          <button className="cta-button" >
            Explore Products
            <FiArrowRight className="arrow-icon" />
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header