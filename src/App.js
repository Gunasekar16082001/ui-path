// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Banner from './component/Banner';
import ProductPage from './component/ProductPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Banner />
        <ProductPage />
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
