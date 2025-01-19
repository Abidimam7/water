import React, { useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // Import custom CSS for additional styling

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [careerApplications, setCareerApplications] = useState([]);
  const [jobVacancies, setJobVacancies] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', requirements: '' });
  // const [visitorStats, setVisitorStats] = useState({
  //   totalVisitors: 1023,
  //   todayVisitors: 56,
  // });
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/cms/api/products/')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));

    axios
      .get('http://localhost:8000/cms/api/job-vacancies/')
      .then((response) => setJobVacancies(response.data))
      .catch((error) => console.error('Error fetching job vacancies:', error));

    axios
      .get('http://localhost:8000/cms/api/career-applications/')
      .then((response) => setCareerApplications(response.data))
      .catch((error) => console.error('Error fetching career applications:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProduct((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const addProduct = () => {
    if (newProduct.title && newProduct.description && newProduct.image) {
      axios
        .post('http://localhost:8000/cms/api/products/', newProduct)
        .then((response) => {
          setProducts([...products, response.data]);
          setNewProduct({ title: '', description: '', image: null });
        })
        .catch((error) => console.error('Error adding product:', error));
    } else {
      alert('Please fill out all fields and upload an image.');
    }
  };

  const removeProduct = (id) => {
    axios
      .delete(`http://localhost:8000/cms/api/products/${id}/`)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((error) => console.error('Error removing product:', error));
  };

  const addJobVacancy = () => {
    if (newJob.title && newJob.description) {
      axios
        .post('http://localhost:8000/cms/api/job-vacancies/', newJob)
        .then((response) => {
          setJobVacancies([...jobVacancies, response.data]);
          setNewJob({ title: '', description: '', requirements: '' });
        })
        .catch((error) => console.error('Error adding job vacancy:', error));
    }
  };

  const removeJobVacancy = (id) => {
    axios
      .delete(`http://localhost:8000/cms/api/job-vacancies/${id}/`)
      .then(() => setJobVacancies(jobVacancies.filter((job) => job.id !== id)))
      .catch((error) => console.error('Error removing job vacancy:', error));
  };

  const renderTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Click to add a new product</Tooltip>;

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light" style={{ width: '250px', height: '100vh', borderRight: '1px solid #ddd' }}>
        <h2 className="text-center text-dark mt-4 mb-4">Admin Dashboard</h2>
        <ul className="nav flex-column px-3">
          <li className="nav-item mb-3">
            <a href="#visitor-stats" className="nav-link text-dark">
              <i className="bi bi-bar-chart-line me-2"></i> Visitor Stats
            </a>
          </li>
          <li className="nav-item mb-3">
            <button
              className="nav-link btn btn-link text-dark p-0"
              onClick={() => setShowProducts(!showProducts)}
              style={{ fontWeight: 'bold' }}
            >
              {showProducts ? 'Hide' : 'Show'} Product Management
            </button>
          </li>
          <li className="nav-item mb-3">
            <a href="#career-applications" className="nav-link text-dark">
              <i className="bi bi-file-earmark-text me-2"></i> Career Applications
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#job-vacancies" className="nav-link text-dark">
              <i className="bi bi-briefcase me-2"></i> Job Vacancies
            </a>
          </li>
        </ul>
      </div>


      {/* Main Content */}
      <div className="container py-5 flex-grow-1">
        <div className="row gx-4">
          {/* Visitor Stats Section */}
          <section id="visitor-stats" className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center shadow-sm bg-light">
              <div className="card-body">
                <h5 className="card-title">Total Visitors</h5>
                {/* <p className="card-text text-success fs-4">{visitorStats.totalVisitors}</p> */}
              </div>
            </div>
          </section>
          <section className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center shadow-sm bg-light">
              <div className="card-body">
                <h5 className="card-title">Today's Visitors</h5>
                {/* <p className="card-text text-primary fs-4">{visitorStats.todayVisitors}</p> */}
              </div>
            </div>
          </section>

          {/* Product Management Section */}
          <section id="product-management" className="col-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column flex-lg-row">
                {/* Add Product Form */}
                <div className="card p-4 shadow-sm mb-4 mb-lg-0 me-lg-4" style={{ flex: '1' }}>
                  <h4>Add New Product</h4>
                  <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    placeholder="Product Title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="description"
                    className="form-control mb-2"
                    placeholder="Product Description"
                    rows="3"
                    value={newProduct.description}
                    onChange={handleInputChange}
                  ></textarea>
                  <input
                    type="file"
                    className="form-control mb-2"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {newProduct.image && (
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      className="img-thumbnail mb-2"
                      style={{ maxHeight: '150px' }}
                    />
                  )}
                  <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <button className="btn btn-success" onClick={addProduct}>Add Product</button>
                  </OverlayTrigger>
                </div>

                {/* Product List */}
                {showProducts && (
                <div style={{ flex: '2' }}>
                  <h4>Product List</h4>
                  <div className="row">
                    {products.map((product) => (
                      <div key={product.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm bg-light">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip id={`remove-tooltip-${product.id}`}>Remove this product</Tooltip>}
                            >
                              <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>Remove</button>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                 )}
              </div>
            </div>
          </section>

         {/* Career Applications Section */}
          <section id="career-applications" className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-secondary">Manage Career Applications</h2>
                <div>
                  {careerApplications.length === 0 ? (
                    <p className="text-muted">No applications received yet.</p>
                  ) : (
                    <ul className="list-group">
                      {careerApplications.map((app, index) => (
                        <li key={index} className="list-group-item">
                          <div>
                            <strong>Name:</strong> {app.name}
                          </div>
                          <div>
                            <strong>Email:</strong> {app.email}
                          </div>
                          <div>
                            <strong>Phone:</strong> {app.phone}
                          </div>
                          <div>
                            <strong>Position:</strong> {app.position ? app.position.title : "No position specified"}
                          </div>
                          <div>
                          <strong>Resume:</strong> 
                          {app.resume ? (
                            <a href={`${app.resume}`} target="_blank" rel="noopener noreferrer">
                              View Resume
                            </a>
                          ) : (
                            <span>No resume uploaded</span>
                          )}

                          </div>
                          <div>
                            <strong>Message:</strong> {app.message}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Job Vacancies Section */}
          <section id="job-vacancies" className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-secondary">Manage Job Vacancies</h2>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Job Title"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  />
                  <textarea
                    className="form-control mb-2"
                    placeholder="Job Description"
                    rows="3"
                    value={newJob.description}
                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  ></textarea>
                  <textarea
                    className="form-control mb-2"
                    placeholder="Job Requirements"
                    rows="3"
                    value={newJob.requirements}
                    onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  ></textarea>
                  <button className="btn btn-success" onClick={addJobVacancy}>Add Job</button>
                </div>
                <div>
                  {jobVacancies.length === 0 ? (
                    <p className="text-muted">No job vacancies posted yet.</p>
                  ) : (
                    <ul className="list-group">
                      {jobVacancies.map((job) => (
                        <li
                          key={job.id}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <strong>{job.title}</strong>
                            <p>{job.description}</p>
                          </div>
                          <button
                            className="btn btn-danger"
                            onClick={() => removeJobVacancy(job.id)}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
