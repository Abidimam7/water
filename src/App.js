import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header'; // Header is now always visible (conditionally)
import Footer from './components/Footer'; // Footer is always visible
import Home from './components/Home'; // Home component
import Career from './components/Career'; // Career component
import Admin from './components/Admin'; // Admin component
import Login from './components/Login'; // Login component
import Gallery from './components/Gallery'; // Gallery component

// Layout component to manage Header/Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/* Hide header on admin route */}
      {location.pathname !== '/admin' && <Header />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  // Track login state and persist across page reloads
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'; 
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />

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
      </Layout>
    </Router>
  );
};

export default App;
