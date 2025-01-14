import React, { useState, useEffect } from 'react';
import axios from 'axios';
import About from './About';
import Contact from './Contact';
import Founder from './Founder';
import AnimatedBanner from './AnimatedBanner';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Static products with images in the public folder
  const staticProducts = [
    { name: 'KINGFISHER PREMIUM', image: '/01.jpg', description: 'Packaged Drinking Water' },
    { name: 'Kingfisher Strong Soda', image: '/02.jpg', description: 'Kingfisher Strong Soda' },
    { name: 'Kingfisher Ultra Soda', image: '/03.jpg', description: 'Kingfisher Ultra Soda' },
    { name: 'Zero Degree ', image: '/04.jpg', description: 'Packaged Drinking Water' },
    { name: 'Kingfisher Premium', image: '/05.jpg', description: 'Packaged Drinking Water' },
    { name: 'Kingfisher Ultra Soda', image: '/06.jpg', description: 'Kingfisher Ultra Soda' },
  ];

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
      <div style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
        <h2 className="text-center text-primary mb-4">Our Products</h2>
        <div className="row justify-content-center">
          {/* Render Static Products first */}
          {staticProducts.map((product, index) => (
            <div key={index} className="product-card col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm rounded">
                <img
                  src={product.image}  // Static image from public folder
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    height: '300px',
                    objectFit: 'contain', 
                  }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title text-success">{product.name}</h3>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Render Dynamic Products from the API */}
          {(showAllProducts ? products : products.slice(0, 3)).map((product, index) => (
            <div key={product.id || index} className="product-card col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm rounded">
                <img
                  src={product.image_url || '/default-image.jpg'}  // Fallback to default if image is missing
                  alt={product.name || `Sample Product ${index + 1}`}
                  className="card-img-top"
                  style={{
                    height: '300px',
                    objectFit: 'contain', 
                  }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title text-success">{product.name || `Sample Product ${index + 1}`}</h3>
                  <p className="card-text text-muted">{product.description || 'Sample description of the product'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show "See More" button if there are more than 4 products */}
        {!showAllProducts && products.length > 4 && (
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

      {/* Founder Section */}
      <div id="Founder" className="my-5 py-5" style={{ backgroundColor: '#e6f7ff' }}>
        <Founder />
      </div>

      {/* Contact Section */}
      <div id="contact" className="my-5 py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
