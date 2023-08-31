// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faTree, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../App.css"


function Navbar({ isSidebarOpen, toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/home"><FontAwesomeIcon icon={faHome} className='icon' />Home</a>
        <a href="/shop"><FontAwesomeIcon icon={faShoppingCart} className='icon' />Shop</a>
        <a href="/Features"><FontAwesomeIcon icon={faTree} className='icon' />Features</a>
      </div>
      <div className="navbar-center">
        <div className='center-icon'>
          <FontAwesomeIcon icon={faTree} size="1x" />
        </div>
      </div>
      <div className="navbar-right">
        <div className='nav-rig'>
          <div className="search-container">
            <FontAwesomeIcon className="icon-search" icon={faSearch} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button className="join-button">Join</button>
          <button className="login-button">Login</button>
        </div>
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleSidebar} />
      </div>
    </nav>
  );
}

export default Navbar;
