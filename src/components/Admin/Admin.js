import React, { useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger, Modal, Button } from 'react-bootstrap';
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
  const [showProducts, setShowProducts] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    axios
      .get('http://localhost:8000/cms/api/products/')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
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

  const confirmDeleteProduct = (id) => {
    setDeleteProductId(id);
    setShowModal(true);
  };

  const removeProduct = () => {
    if (deleteProductId) {
      axios
        .delete(`http://localhost:8000/cms/api/products/${deleteProductId}/`)
        .then(() => {
          setProducts(products.filter((product) => product.id !== deleteProductId));
          setShowModal(false);
          setDeleteProductId(null);
        })
        .catch((error) => console.error('Error removing product:', error));
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar
      <div className="sidebar">
        <button className="btn btn-link" onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? 'Hide' : 'Show'} Product Management
        </button>
        <button className="btn btn-link">Career</button>
        <button className="btn btn-link">Applications</button>
      </div> */}

      {/* Main Content */}
      <div className="main-content">  
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
                    onClick={() => confirmDeleteProduct(product.id)}
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

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={removeProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
