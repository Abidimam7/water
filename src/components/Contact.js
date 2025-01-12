import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="display-4">Contact Us</h2>
        <p className="lead">We would love to hear from you! Reach out to us with your queries or feedback.</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded" style={{ backgroundColor: '#e3f2fd' }}>
            <h4 className="text-primary">Address</h4>
            <p className="mb-0">Clean Water & Allied Products Pvt. Ltd.</p>
            <p className="mb-0">Aduwal Jandori, Teh - Nalagarh,</p>
            <p>Dist. Solan, Himachal Pradesh - 174101</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded" style={{ backgroundColor: '#e8f5e9' }}>
            <h4 className="text-success">Contact Details</h4>
            <p className="mb-0"><strong>Phone:</strong> +91-8560073357</p>
            <p><strong>Email:</strong> clean.naturalwater@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h5 className="text-muted">We are here to assist you and answer any questions you may have.</h5>
        <p className="text-muted">Feel free to contact us, and we will get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default Contact;
