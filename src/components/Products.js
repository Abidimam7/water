import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);  // To store the fetched products
  const [loading, setLoading] = useState(true);  // To handle the loading state
  const [error, setError] = useState(null);      // To handle any errors

  // Fetch products when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/cms/api/products/')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);  // Empty dependency array to run only once when the component mounts

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
