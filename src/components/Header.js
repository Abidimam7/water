import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle navbar state
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close navbar when a link is clicked
  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#187bb4' }}>
        <div className="container">
          {/* Brand Name */}
          <button
            className="btn btn-link navbar-brand text-white"
            onClick={() => scrollToSection('hero')}
          >
            Clean Water & Allied Products
          </button>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => { scrollToSection('about'); handleLinkClick(); }}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => { scrollToSection('products'); handleLinkClick(); }}
                >
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => { scrollToSection('Founder'); handleLinkClick(); }}
                >
                  Our Founder
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => { scrollToSection('contact'); handleLinkClick(); }}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link text-white" onClick={handleLinkClick}>
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
