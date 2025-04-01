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
    { name: 'Kingfisher Premium', image: '/01.jpg', description: 'Pure and safe drinking water from Clean Water & Allied Products Pvt. Ltd. Ideal for hydration on the go, Kingfisher is a trusted choice for quality and freshness.' },
    { name: 'Kingfisher Strong Power Soda – 600ml', image: '/02.jpg', description: 'Crisp and bold carbonated soda for a refreshing boost, perfect for mixers or enjoying solo.' },
    { name: 'Kingfisher Ultra Soda', image: '/03.jpg', description: 'A smooth and refreshing soda crafted for premium taste and perfect fizz, ideal for mixing or standalone enjoyment.' },
    { name: 'Zero Degree Premium Packaged Drinking Water  ', image: '/04.jpg', description: 'Clean and refreshing mineral-enhanced water, crafted for purity and hydration anytime, anywhere.' },
    { name: 'Himalayan Clean Packaged Drinking Water – 1L ', image: '/12.jpg', description: 'Pure and reliable drinking water sourced with care, offering crisp refreshment in every sip.' },
    { name: 'Himalayan Clean Packaged Drinking Water -500 ML', image: '/11.jpg', description: 'Pure and reliable drinking water sourced with care, offering crisp refreshment in every sip.' },
    { name: 'Kingfisher Premium Packaged Drinking Water – 1L', image: '/08.jpg', description: 'Trusted for purity and quality, this 1L bottle offers crisp and refreshing hydration for any time of day.' },
    { name: 'Kingfisher Premium Packaged Drinking Water – 500ml', image: '09.jpg', description: 'Convenient and pure hydration in a compact 500ml bottle, perfect for travel, work, or school.' },
    { name: 'Kingfisher Premium Packaged Drinking Water – 2L', image: '/10.jpg', description: 'A larger 2L bottle for family or group hydration, combining purity, quality, and convenience with an easy-carry handle.' },
    { name: 'Zero Degree Packaged Drinking Water – 500ml ', image: '/13.jpg', description: 'Compact and refreshing, this 500ml bottle offers clean, mineral-enriched hydration wherever you go.' },
    { name: 'Zero Degree Packaged Drinking Water – 250ml', image: '/14.jpg', description: 'Handy and lightweight, this 250ml bottle delivers clean and crisp water—perfect for single-serve refreshment.' },
    { name: 'Zero Degree Premium Packaged Drinking Water – 1L', image: '/15.jpg', description: 'Mineral-enriched and pure, this 1L bottle is designed for reliable hydration with a refreshing taste.' },
    { name: 'Himalayan Clean Packaged Drinking Water – 1L & 250ml', image: '/16.jpg', description: 'Available in both 1L and 250ml sizes, Himalayan Clean delivers crisp, pure water for hydration at home or on the go.' },
    { name: 'Zero Degree Packaged Drinking Water – 1L, 500ml & 250ml', image: '/17.jpg', description: 'A complete range of Zero Degree drinking water bottles, offering pure hydration in 1L, 500ml, and 250ml sizes for every need.' },
    { name: 'Himalayan Clean Jeera Soda – 160ml', image: '/40.jpg', description: 'A zesty and refreshing traditional Indian soda infused with jeera (cumin) flavor—perfectly sized for a quick, tangy thirst-quencher' },
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

      {/* Welcome Section */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '40px 20px',
          textAlign: 'center',
        }}
        data-aos="fade-up"
      >
        <h1 className="text-primary">Welcome to Clean Water & Allied Products Pvt. Ltd.</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Delivering Purity, Innovation, and Excellence in Every Drop
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
          Nestled in the serene landscapes of Nalagarh, Himachal Pradesh, Clean Water & Allied Products Pvt. Ltd. is a trusted leader in manufacturing packaged drinking water, natural mineral water, and flavored soft drinks. With a steadfast commitment to quality, safety, and sustainability, we ensure that every product we deliver meets the highest standards of excellence.
        </p>
      </div>


      {/* Products Section */}
      <div style={{ backgroundColor: '#187bb4', padding: '40px 20px' }}>
        <h2 className="text-center text-white">Our Products</h2>
        <div className="row justify-content-center">
          {/* Render Static Products first */}
          {staticProducts.map((product, index) => (
            <div key={index} className="product-card col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm rounded">
                <img
                  src={product.image} // Static image from public folder
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
                  src={product.image_url || '/default-image.jpg'} // Fallback to default if image is missing
                  alt={product.name || `Sample Product ${index + 1}`}
                  className="card-img-top"
                  style={{
                    height: '350px',
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

        {/* Show "See More" button if there are more than 3 products */}
        {!showAllProducts && products.length > 3 && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>

      {/* About Section */}
      <div id="about" className="my-5 py-5" style={{ backgroundColor: '#187bb4' }}>
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

