import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

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
  const [showProducts] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  

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
  // Remove job vacancy
  // const removeJobVacancy = (id) => {
  //   axios
  //     .delete(`http://localhost:8000/cms/api/job-vacancies/${id}/`)
  //     .then(() => setJobVacancies(jobVacancies.filter((job) => job.id !== id)))
  //     .catch((error) => console.error('Error removing job vacancy:', error));
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    window.location.href = '/login'; // Redirect to login page
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

  const confirmDelete = (id, type) => {
    setItemToDelete(id);
    setDeleteType(type);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    if (deleteType === 'product') {
      axios
        .delete(`http://localhost:8000/cms/api/products/${itemToDelete}/`)
        .then(() => setProducts(products.filter((product) => product.id !== itemToDelete)))
        .catch((error) => console.error('Error removing product:', error));
    } else if (deleteType === 'job') {
      axios
        .delete(`http://localhost:8000/cms/api/job-vacancies/${itemToDelete}/`)
        .then(() => setJobVacancies(jobVacancies.filter((job) => job.id !== itemToDelete)))
        .catch((error) => console.error('Error removing job vacancy:', error));
    }
    setShowDeleteModal(false);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="d-flex">
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div className={`sidebar bg-light ${sidebarVisible ? 'show' : ''}`}>
        <h2 className="text-center text-dark mt-4">Admin Dashboard</h2>
        <ul className="nav flex-column px-3">
          <li className="nav-item mb-3">
            <a href="#products" className="nav-link text-dark">
              Products
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#career-applications" className="nav-link text-dark">
              Career Applications
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#job-vacancies" className="nav-link text-dark">
              Job Vacancies
            </a>
          </li>
          <li className="nav-item">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container py-4">
      <div className="main-content" id="products">  
        {/* Products Section */}
        {showProducts && (
          <div className="container">
            <h2>Manage Products</h2>

            {/* Upload Section in a Small Attractive Card */}
            <div className="upload-card">
              <h3>Add New Product</h3>
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={newProduct.title}
                onChange={handleInputChange}
                className="form-input"
              />
              <textarea
                name="description"
                placeholder="Product Description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="form-input"
              ></textarea>

              <div className="upload-section">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  id="image-upload"
                  className="upload-input"
                />
                <label htmlFor="image-upload" className="upload-label">
                  {newProduct.image ? 'Change Image' : 'Upload Image'}
                </label>

                {/* Preview of the uploaded image */}
                {newProduct.image && (
                  <div className="image-preview">
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      className="preview-img"
                    />
                  </div>
                )}
              </div>

              <button onClick={addProduct} className="btn btn-primary">
                Add Product
              </button>
            </div>

            <div className="products-list">
              {/* Display products side by side */}
              {products.slice(0, showAll ? products.length : 4).map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-img"
                  />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button
                    onClick={() => confirmDelete(product.id, 'product')}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Show All button */}
            {!showAll && products.length > 2 && (
              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowAll(true)}
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>

        {/* Career Applications Section */}
        {/* <section id="career-applications" className="mb-3"> */}
        <div className="main-content" id="career-applications">
        <h3>Career Applications</h3>
        <div>
            {careerApplications.length === 0 ? (
            <p className="text-muted">No applications received yet.</p>
            ) : (
            <ul className="list-group">
                {careerApplications.map((app) => (
                <li key={app.id} className="list-group-item">
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
                    <strong>Position:</strong> {app.position || 'No position specified'}
                    </div>
                    <div>
                    <strong>Resume:</strong>{' '}
                    {app.resume ? (
                        <a href={`${app.resume}`} target="_blank" rel="noopener noreferrer">
                        View Resume
                        </a>
                    ) : (
                        'No resume uploaded'
                    )}
                    </div>
                    <div>
                    <strong>Message:</strong> {app.message}
                    </div>
                    <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => confirmDelete(app.id, 'career application')}
                    >
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>

        {/* Job Vacancies Section */}
        {/* <section id="job-vacancies" className="mb-3"> */}
        <div className="main-content" id="job-vacancies">    
        <h3>Job Vacancies</h3>
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
            <button className="btn btn-success" onClick={addJobVacancy}>
            Add Job
            </button>
        </div>
        <div>
            {jobVacancies.length === 0 ? (
            <p className="text-muted">No job vacancies posted yet.</p>
            ) : (
            <ul className="list-group">
                {jobVacancies.map((job) => (
                <li key={job.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                    <strong>{job.title}</strong>
                    <p>{job.description}</p>
                    </div>
                    <button
                    className="btn btn-danger btn-sm"
                    onClick={() => confirmDelete(job.id, 'job')}
                    >
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this {deleteType}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
