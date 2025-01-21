import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  const textStyle = {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
  };

  return (
    <div style={{ backgroundColor: '#f7f9fc', padding: '50px 0' }}>
      <div className="container">
        {/* Welcome Section */}
      

        {/* Title Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 text-primary">About Us</h2>
          <p style={textStyle}>
            Committed to delivering high-quality products with a focus on safety, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Product Range Section */}
        <div className="mb-5" data-aos="fade-right">
          <h3 className="text-center text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
            Our Product Range
          </h3>
          <ul style={{ ...textStyle, paddingLeft: '20px' }}>
            <li>
              <strong>Kingfisher Packaged Drinking Water:</strong> We take franchises from Kingfisher, a trusted name in the industry. Kingfisher serves as our bottler, ensuring high-quality packaged drinking water processed through advanced filtration systems to meet stringent safety standards.
            </li>
            <li>
              <strong>Natural Mineral Water:</strong> Bottled with care to retain its natural minerals and nutrients.
            </li>
            <li>
              <strong>Jeera Soda:</strong> Enjoy the tangy and invigorating taste crafted with a unique blend of spices.
            </li>
            <li>
              <strong>Carbonated Soft Drink (CSD) Line:</strong> A delightful range of fizzy beverages in various flavors, perfect for quenching your thirst and elevating your moments. Crafted with precision and care, our CSD line offers a refreshing experience with every sip.
            </li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="mb-5" data-aos="fade-left">
          <h3 className="text-center text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
            Our Mission
          </h3>
          <p style={textStyle}>
            To exceed customer expectations by delivering world-class products that prioritize health, safety, and satisfaction.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-5" data-aos="fade-right">
          <h3 className="text-center text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
            Why Choose Us?
          </h3>
          <ul style={{ ...textStyle, paddingLeft: '20px' }}>
            <li>Uncompromising Quality: Strict quality control protocols at every stage of production.</li>
            <li>Cutting-Edge Technology: State-of-the-art manufacturing facilities ensure precision and efficiency.</li>
            <li>Eco-Friendly Practices: Sustainability is at the core of everything we do.</li>
            <li>Customer-Centric Approach: Innovating to meet and exceed customer needs.</li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="mb-5" data-aos="fade-left">
          <h3 className="text-center text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
            Our Certifications
          </h3>
          <p style={textStyle}>
            BIS Certified (ISO 14543:2024) and FSSAI Approved for stringent food safety management and compliance.
          </p>
        </div>

        {/* Sustainability Section */}
        <div className="mb-5" data-aos="fade-up">
          <h3 className="text-center text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
            Our Commitment to Sustainability
          </h3>
          <p style={textStyle}>
            From energy-efficient machinery to sustainable production methods, we are dedicated to reducing our carbon footprint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
