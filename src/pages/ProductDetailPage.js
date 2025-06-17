import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p style={{ padding: '2rem' }}>Error loading product details.</p>;
  if (!product) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetailPage;
