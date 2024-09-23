import React, { useState } from 'react';
import "./BicycleNavbar.css";
import MountainProductPage from '../../Bicycle/BicycleMountain';
import BicycleBMX from '../../Bicycle/BicycleBMX';
import BicycleRace from '../../Bicycle/BicycleRace';
import BicycleHYB from '../../Bicycle/BicycleHybrid';

const BicycleNavbar = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tabs-container">
      <div className="toggle-button" onClick={toggleMenu}>
        Menu
      </div>
      <ul className={`tab-list ${isMenuOpen ? 'show' : ''}`}>
        <li 
          className={`tab-item ${activeTab === '1' ? 'active' : ''}`} 
          onClick={() => handleTabClick('1')}
        >
          Mountain
        </li>
        <li 
          className={`tab-item ${activeTab === '2' ? 'active' : ''}`} 
          onClick={() => handleTabClick('2')}
        >
          BMX
        </li>
        <li 
          className={`tab-item ${activeTab === '3' ? 'active' : ''}`} 
          onClick={() => handleTabClick('3')}
        >
          Racing
        </li>
        <li 
          className={`tab-item ${activeTab === '4' ? 'active' : ''}`} 
          onClick={() => handleTabClick('4')}
        >
          Hybrid
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === '1' && <MountainProductPage/> }
        {activeTab === '2' && <BicycleBMX/>}
        {activeTab === '3' && <BicycleRace/>}
        {activeTab === '4' && <BicycleHYB/>}
      </div>
    </div>
  );
};

export default BicycleNavbar;