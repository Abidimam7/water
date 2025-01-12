import React, { useState, useEffect } from 'react';
import axios from 'axios';
import About from './About';
import Contact from './Contact';
import MachineryDetails from './MachineryDetails';
import AnimatedBanner from './AnimatedBanner';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Fetch products from Django API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cms/api/products/');
      setProducts(response.data);
      console.log(response.data); // Debugging: Log the fetched products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    setShowAllProducts(true);
  };

  return (
    <div>
      {/* Animated Banner */}
      <AnimatedBanner />

      {/* Products Section */}
      <div id="products" className="container my-5 py-5" style={{ backgroundColor: '#f0f8ff', borderRadius: '10px' }}>
        <h2 className="text-center text-primary mb-4">Our Products</h2>
        <div className="row justify-content-center">
          {(showAllProducts ? products : products.slice(0, 3)).map((product) => (
            <div key={product.id} className="product-card col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm rounded" style={{ border: '1px solid #ddd' }}>
                <img
                  src={product.image_url} // Use the correct image_url from the API response
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'scale-down', backgroundColor: '#e9f7ef' }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title text-success">{product.name}</h3>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAllProducts && products.length > 3 && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>

      {/* About Section */}
      <div id="about" className="my-5 py-5" style={{ backgroundColor: '#fdf5e6' }}>
        <About />
      </div>

      {/* Machinery Section */}
      <div id="machinery" className="my-5 py-5" style={{ backgroundColor: '#e6f7ff' }}>
        <MachineryDetails />
      </div>

      {/* Contact Section */}
      <div id="contact" className="my-5 py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
