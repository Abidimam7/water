import React from 'react';
import AnimatedBanner from './AnimatedBanner';


const Home = () => {
  const products = [
    { id: 1, title: 'Kingfisher Packaged Drinking Water', img: 'kingfisher.jpg', description: 'Pure and safe drinking water.' },
    { id: 2, title: 'Natural Mineral Water', img: 'packaged.jpg', description: 'Bottled from pristine sources.' },
    { id: 3, title: 'Soda (Jeera Soda)', img: 'soda.jpg', description: 'A tangy, refreshing drink.' },
    { id: 4, title: 'Himalyan Water', img: 'him.jpg', description: 'Natural and pure Himalayan water.' },
    { id: 5, title: 'Premium Water', img: 'premium.jpg', description: 'Premium quality for premium needs.' },
    { id: 6, title: 'Zero Water', img: 'zero.jpg', description: 'Refreshing zero-calorie water.' },
  ];

  const machineryData = [
    {
      line: 'PDW Line',
      details: [
        { id: 1, name: 'Bore-well Motor', company: 'HP', capacity: '10 HP', quantity: '' },
        { id: 2, name: 'R.O System', company: '', capacity: '16 KL', quantity: '' },
        { id: 3, name: 'PET Blowing Machine', company: 'SBR', capacity: '7200/Hrs', quantity: '' },
      ],
    },
    {
      line: 'CSD Line',
      details: [
        { id: 4, name: 'Transformer', company: '', capacity: '1200 KVA', quantity: '1' },
        { id: 5, name: 'H.P Compressor', company: 'CP', capacity: '200 CFM', quantity: '2' },
        { id: 6, name: 'Cooling Tower', company: '', capacity: '80 TR', quantity: '3' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="container-fluid py-5 bg-light text-center">
        <div className="container">
          <h1 className="mb-4">Welcome to Clean Water & Allied Products Pvt. Ltd.</h1>
          <p className="lead mb-5">
            Providing high-quality packaged drinking water, mineral water, and flavored soft drinks to ensure your well-being.
          </p>
          <img src="products.jpg" alt="Hero" className="img-fluid rounded shadow-lg" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container my-5">
        <h2>About Us</h2>
        <p>
          Clean Water & Allied Products Pvt. Ltd. is committed to delivering high-quality products that prioritize safety, innovation, and customer satisfaction.
        </p>
        <div className="row mt-4">
          {['Quality', 'Safety', 'Innovation', 'Satisfaction'].map((value, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-3">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{value}</h5>
                  <p className="card-text">We focus on {value.toLowerCase()} to exceed expectations.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container my-5">
        <h2>Our Products</h2>
        <div className="row mt-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Machinery Details Section */}
      <section id="machinery" className="container my-5">
        <h2>Manufacturing Machinery Details</h2>
        {machineryData.map((line, index) => (
          <div key={index} className="mb-5">
            <h4>{line.line}</h4>
            <table className="table table-responsive table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Capacity</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {line.details.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.company || 'N/A'}</td>
                    <td>{item.capacity || 'N/A'}</td>
                    <td>{item.quantity || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="container my-5">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> Aduwal Jandori, Teh - Nalagarh, Dist. Solan, Himachal- 174101
        </p>
        <p>
          <strong>Phone:</strong> +91-8560073357
        </p>
        <p>
          <strong>Email:</strong> clean.naturalwater@gmail.com
        </p>
      </section>
    </div>
  );
};

export default Home;
