import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Contact = () => {
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
          <h2 className="display-4 text-primary">Contact Us</h2>
          <p className="lead text-muted">
            We’re here to answer all your queries and provide information about our products and services.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-right">
            <div className="p-4 shadow-sm bg-white rounded">
              <h4 className="text-primary mb-3">Address</h4>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                Clean Water & Allied Products Pvt. Ltd.<br />
                Khasra No. 136/1, Kita-1, Hadbast No. 66,<br />
                Pragana Plassi, Village Aduwal,<br />
                Teh. Nalagarh, Dist. Solan,<br />
                Himachal Pradesh - 174101
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-left">
            <div className="p-4 shadow-sm bg-white rounded">
              <h4 className="text-primary mb-3">Contact Information</h4>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                <strong>Phone:</strong> +91-9888740000 / +91-7743000010<br />
                <strong>Email:</strong> clean.naturalwater@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="text-primary mb-3">Our Location</h4>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7110622186413!2d76.71640281454334!3d30.838730481610828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed8a71e1da7f%3A0x2b15a7b53156c0d8!2sNalagarh%2C%20Himachal%20Pradesh%20174101!5e0!3m2!1sen!2sin!4v1616641234567!5m2!1sen!2sin"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
