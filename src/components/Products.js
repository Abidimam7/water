import React from 'react';

const Products = () => {
  return (
    <div className="container mt-5">
      <h2>Our Products</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="kingfisher.jpg" className="card-img-top" alt="Kingfisher Water" />
            <div className="card-body">
              <h5 className="card-title">Kingfisher Packaged Drinking Water</h5>
              <p className="card-text">Pure and safe drinking water.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="packaged.jpg" className="card-img-top" alt="Mineral Water" />
            <div className="card-body">
              <h5 className="card-title">Natural Mineral Water</h5>
              <p className="card-text">Bottled from pristine sources.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="soda.jpg" className="card-img-top" alt="Jeera Soda" />
            <div className="card-body">
              <h5 className="card-title">Soda (Jeera Soda)</h5>
              <p className="card-text">A tangy, refreshing drink.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="soda.jpg" className="card-img-top" alt="Jeera Soda" />
            <div className="card-body">
              <h5 className="card-title">Soda (Jeera Soda)</h5>
              <p className="card-text">A tangy, refreshing drink.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="soda.jpg" className="card-img-top" alt="Jeera Soda" />
            <div className="card-body">
              <h5 className="card-title">Soda (Jeera Soda)</h5>
              <p className="card-text">A tangy, refreshing drink.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="soda.jpg" className="card-img-top" alt="Jeera Soda" />
            <div className="card-body">
              <h5 className="card-title">Soda (Jeera Soda)</h5>
              <p className="card-text">A tangy, refreshing drink.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
