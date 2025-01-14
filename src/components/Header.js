import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => scrollToSection('about')}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => scrollToSection('products')}
                >
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => scrollToSection('Founder')}
                >
                  Our Founder
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link text-white">
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
