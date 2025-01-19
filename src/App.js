import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header'; // Header is now always visible
import Footer from './components/Footer'; // Footer is now always visible
import Home from './components/Home'; // Home component
import Career from './components/Career'; // Career component
import Admin from './components/Admin'; // Admin component
import Login from './components/Login'; // Login component

const App = () => {
  // Track login state and persist across page reloads
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage to get the login state
    return localStorage.getItem('isLoggedIn') === 'true'; 
  });

  // Update localStorage whenever the login state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      {window.location.pathname !== '/admin' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        
        {/* Protect Admin route */}
        <Route
          path="/admin"
          element={isLoggedIn ? <Admin /> : <Navigate to="/login" />}
        />
        
        {/* Login route */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
      <Footer /> {/* Always render footer */}
    </Router>
  );
};

export default App;
