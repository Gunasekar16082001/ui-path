import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

function Sidebar({ isSidebarOpen, toggleSidebar, closeSidebar }) {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="search-container">
        <FontAwesomeIcon className="icon-search" icon={faSearch} />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <br />
      <a href="/home">Home</a>
      <a href="/shop">Shop</a>
      <a href="/features">Features</a>
      <br />
      <button className="join-button">Join</button>
      <button className="login-button">Login</button>
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={closeSidebar} />
      </div>
    </div>
  );
}

export default Sidebar;
