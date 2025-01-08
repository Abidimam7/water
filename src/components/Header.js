import React from 'react';

const Header = () => {
  // Define the scrollToSection function
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
          <a className="navbar-brand" href="#">Clean Water & Allied Products</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('hero')}>Home</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('about')}>About Us</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('products')}>Products</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('machinery')}>Machinery</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('contact')}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
