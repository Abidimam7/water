import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Header is now always visible
import Footer from './components/Footer';
import Home from './components/Home';
import Career from './components/Career';



const App = () => {
  return (
    <Router>
      <Header />  {/* Always render the header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer /> {/* Always render footer */}
    </Router>
  );
};

export default App;
