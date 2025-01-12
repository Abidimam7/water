import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: '', description: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Product Image URL"
        value={product.image}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};
