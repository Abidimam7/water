import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: Add global styles here if needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Render the App component into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
