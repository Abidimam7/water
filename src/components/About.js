import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="display-4">About Us</h2>
        <p className="lead">Committed to delivering high-quality products with a focus on safety, innovation, and customer satisfaction.</p>
      </div>

      <div className="row mb-5">
        <div className="col-md-3">
          <div className="card shadow-sm border-0" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Quality</h5>
              <p className="card-text">Commitment to excellence in every product.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0" style={{ backgroundColor: '#e9f7ef' }}>
            <div className="card-body text-center">
              <h5 className="card-title text-success">Safety</h5>
              <p className="card-text">Ensuring safety at every step.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0" style={{ backgroundColor: '#fef9e7' }}>
            <div className="card-body text-center">
              <h5 className="card-title text-warning">Innovation</h5>
              <p className="card-text">Constantly evolving to meet customer needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0" style={{ backgroundColor: '#f9ebea' }}>
            <div className="card-body text-center">
              <h5 className="card-title text-danger">Satisfaction</h5>
              <p className="card-text">Exceeding expectations, every time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-primary">Overview</h3>
        <p className="text-muted">Clean Water & Allied Products Pvt. Ltd. is a leading manufacturer of Packaged Drinking Water, Natural Mineral Water, and flavored soft drinks in India. Our company is committed to providing high-quality products that meet the evolving needs of our customers.</p>
      </div>

      <div className="mb-5">
        <h3 className="text-primary">Our Products</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Kingfisher Packaged Drinking Water:</strong> Our flagship brand, Kingfisher, is a popular choice among consumers seeking pure and safe drinking water.
          </li>
          <li className="list-group-item">
            <strong>Natural Mineral Water:</strong> Our natural mineral water is sourced from pristine locations and bottled with care to preserve its natural goodness.
          </li>
          <li className="list-group-item">
            <strong>Soda (Jeera Soda):</strong> Our Jeera Soda is a refreshing and unique flavored soft drink that is perfect for those seeking a tangy twist.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="text-primary">Our Mission</h3>
        <p className="text-muted">At Clean Water & Allied Products Pvt. Ltd., our mission is to provide high-quality products that exceed our customers' expectations. We strive to maintain the highest standards of quality, safety, and customer satisfaction in everything we do.</p>
      </div>

      <div className="mb-5">
        <h3 className="text-primary">Our Values</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Quality:</strong> We are committed to delivering high-quality products that meet the evolving needs of our customers.
          </li>
          <li className="list-group-item">
            <strong>Safety:</strong> We prioritize the safety of our products and ensure that they meet the highest standards of quality and purity.
          </li>
          <li className="list-group-item">
            <strong>Customer Satisfaction:</strong> We strive to exceed our customers' expectations and provide them with products that meet their needs and preferences.
          </li>
          <li className="list-group-item">
            <strong>Innovation:</strong> We are committed to innovation and continuously seek new ways to improve our products and processes.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-primary">Our Certifications</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>BIS:</strong> We are certified to the ISO 14543:2024 standard, which recognizes our commitment to food safety management.
          </li>
          <li className="list-group-item">
            <strong>FSSAI:</strong> We are certified to the FSSAI standard, which recognizes our commitment to food safety management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
