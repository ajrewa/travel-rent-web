import React, { useState } from 'react';
import '../MAIN/Navbar.css';
import { Link } from 'react-router-dom';
import menuItems from '../../Assets/DataSets/NavbarData';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menuIndex) => {
    setActiveDropdown(menuIndex);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="toggle-button" onClick={toggleMenu}>
      ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="navbar-item"
          >
            <Link className="href" to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {activeDropdown !== null && (
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="dropdown-images">
              {menuItems[activeDropdown].images.map((image, index) => (
                <img key={index} src={image} alt={menuItems[activeDropdown].name} />
              ))}
            </div>
            <div className="dropdown-description">
              <h3>{menuItems[activeDropdown].heading}</h3>
              <p>{menuItems[activeDropdown].description}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
