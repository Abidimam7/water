import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: '#f7f9fc', padding: '50px 0' }}>
      <div className="container">
        {/* Title Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 text-primary">About Us</h2>
          <p className="lead text-muted">
            Committed to delivering high-quality products with a focus on safety, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Cards Section */}
      <div className="mb-5">
        <h3 className="text-primary text-center mb-4">Our Focus Areas</h3>
        <p className="text-muted text-center">
          At Clean Water & Allied Products Pvt. Ltd., we prioritize four core areas to ensure the highest standards in our operations.
        </p>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4" style={{ backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
              <h5 className="text-primary mb-3">Quality</h5>
              <p className="text-muted">Commitment to excellence in every product.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4" style={{ backgroundColor: '#e9f7ef', borderRadius: '8px' }}>
              <h5 className="text-success mb-3">Safety</h5>
              <p className="text-muted">Ensuring safety at every step.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4" style={{ backgroundColor: '#fef9e7', borderRadius: '8px' }}>
              <h5 className="text-warning mb-3">Innovation</h5>
              <p className="text-muted">Constantly evolving to meet customer needs.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4" style={{ backgroundColor: '#f9ebea', borderRadius: '8px' }}>
              <h5 className="text-danger mb-3">Satisfaction</h5>
              <p className="text-muted">Exceeding expectations, every time.</p>
            </div>
          </div>
        </div>
      </div>

        {/* Overview Section */}
        <div className="mb-5">
          <h3 className="text-primary">Overview</h3>
          <p className="text-muted">
            Clean Water & Allied Products Pvt. Ltd. is a leading manufacturer of Packaged Drinking Water, Natural Mineral
            Water, and flavored soft drinks in India. Our company is committed to providing high-quality products that
            meet the evolving needs of our customers.
          </p>
        </div>

        {/* Products Section */}
        <div className="mb-5">
          <h3 className="text-primary">Our Products</h3>
          <p className="text-muted">
            Our flagship brand, <strong>Kingfisher Packaged Drinking Water</strong>, is a popular choice among consumers
            seeking pure and safe drinking water. We also offer <strong>Natural Mineral Water</strong>, sourced from
            pristine locations and bottled with care to preserve its natural goodness. Additionally, our <strong>Jeera
            Soda</strong> provides a refreshing and unique tangy flavor, perfect for those seeking a delightful twist.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-5">
          <h3 className="text-primary">Our Mission</h3>
          <p className="text-muted">
            At Clean Water & Allied Products Pvt. Ltd., our mission is to provide high-quality products that exceed our
            customers' expectations. We strive to maintain the highest standards of quality, safety, and customer
            satisfaction in everything we do.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-5">
          <h3 className="text-primary">Our Values</h3>
          <p className="text-muted">
            At Clean Water & Allied Products, we uphold core values that guide our operations. <strong>Quality</strong> is our
            top priority, as we strive to deliver products that meet the evolving needs of our customers. We emphasize{' '}
            <strong>Safety</strong> by adhering to the highest standards of purity and excellence. Our focus on{' '}
            <strong>Customer Satisfaction</strong> ensures that we consistently exceed expectations. Finally, we embrace{' '}
            <strong>Innovation</strong>, continuously improving our products and processes to stay ahead in the industry.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-5">
          <h3 className="text-primary">Our Certifications</h3>
          <p className="text-muted">
            We are proud to hold certifications that demonstrate our commitment to quality and safety. Our <strong>BIS</strong>{' '}
            certification (ISO 14543:2024) recognizes our adherence to the highest standards of food safety management.
            Additionally, our <strong>FSSAI</strong> certification highlights our dedication to maintaining superior food safety
            and regulatory compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
