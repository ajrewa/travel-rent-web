import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { PiPackageThin, PiHeartThin } from "react-icons/pi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='header'>
      <nav className="nav">
        <Link to="/" className="logo">
          <h1>AJAX</h1>
          <p>travel.</p>
        </Link>
        <div className="searchbar">
          <input 
            type="text" 
            placeholder='For rent and sell second hand bikes' 
            aria-label="Search input"/>
          <CiSearch aria-label="Search" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>{isMenuOpen ? '✖' : '☰'}</button>
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-item">
            <div className="wishlist"> 
              <PiHeartThin size="25" aria-label="Wishlist" />
            </div>
            <Link to="/Cart" className="cart"> 
              <CiShoppingCart size="25" aria-label="Shopping cart" />
            </Link>
            <div  className="track-order">
              <PiPackageThin size="25" aria-label="Track order" />
            </div>
            <Link to="/Login" className="account">
              <VscAccount size="22" aria-label="Account" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
