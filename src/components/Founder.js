import React from 'react';

const Founder = () => {
  return (
    <div className="container mt-5 py-5" style={{ backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '250px', marginBottom: '20px' }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="text-primary">About Our Founder</h2>
          <p className="text-muted">
            Our founder, Farhat Hussain, is a visionary leader with a passion for excellence and innovation. With years of experience in the industry,
            Farhat has been instrumental in shaping the values and vision of Clean Water & Allied Products Pvt. Ltd.
          </p>
          <p className="text-muted">
            Under Farhat's guidance, the company has achieved remarkable milestones, including the launch of premium products like Kingfisher Packaged Drinking Water
            and Natural Mineral Water. Farhat's dedication to quality, safety, and customer satisfaction has been the driving force behind our success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
