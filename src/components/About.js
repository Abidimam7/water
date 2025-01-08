import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2>About Us</h2>
      <p className="mb-4">Clean Water & Allied Products Pvt. Ltd. is committed to delivering high-quality products that prioritize safety, innovation, and customer satisfaction.</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Quality</h5>
              <p className="card-text">Commitment to excellence in every product.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Safety</h5>
              <p className="card-text">Ensuring safety at every step.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Innovation</h5>
              <p className="card-text">Constantly evolving to meet customer needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Satisfaction</h5>
              <p className="card-text">Exceeding expectations, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
