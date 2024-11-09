import React, { useState } from 'react';
import './Css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left Side Links */}
        <ul className="navbar-left">
          <li><a href="/home">Home</a></li>
          <li><a href="/workshops">Workshops</a></li>
        </ul>

        {/* Center Title/Logo */}
        <h1 className="navbar-logo">Workshop Management</h1>

        {/* Right Side Links */}
        <ul className="navbar-right">
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
