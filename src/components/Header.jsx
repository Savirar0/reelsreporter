import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/waytonewslogo.png" alt="way2news logo" className="logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <nav className="nav-menu">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><Link to="/how-to-earn" onClick={() => setIsMenuOpen(false)}>How to Earn</Link></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>What we need</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>How it works</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>FAQ's</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
