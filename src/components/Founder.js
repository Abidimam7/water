import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Founder = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#f1f7fb', padding: '50px 0' }}>
      <div className="container">
        {/* Title Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 text-primary">About Our Founder</h2>
        </div>

        {/* Founder Section */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center" data-aos="fade-right">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '250px', marginBottom: '20px' }}
            />
          </div>
          <div className="col-md-8" data-aos="fade-left">
            <h3 className="text-primary mb-3">Farhat Hussain</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Our founder, Farhat Hussain, is a visionary leader with a passion for excellence and innovation. With years of experience in the industry,
              Farhat has been instrumental in shaping the values and vision of Clean Water & Allied Products Pvt. Ltd.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Under Farhat's guidance, the company has achieved remarkable milestones, including the launch of premium products like Kingfisher Packaged Drinking Water
              and Natural Mineral Water. Farhat's dedication to quality, safety, and customer satisfaction has been the driving force behind our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
