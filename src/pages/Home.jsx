import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError('Gagal memuat produk'));
  }, []);

  return (
    <div className="home-page">
      <h2>Daftar Produk</h2>
      {error && <p className="error">{error}</p>}
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
            <button onClick={() => navigate('/checkout', { state: { product } })}>Beli</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;