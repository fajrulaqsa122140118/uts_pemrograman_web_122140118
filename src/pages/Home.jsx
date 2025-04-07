import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=3c4e121c0f63185e174097425cc409c5&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();

        const formattedMovies = data.results.slice(0, 8).map((movie) => ({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          time: ['14:00', '17:00', '20:00'], 
          date: '7 April 2025' 
        }));

        setMovies(formattedMovies);
      } catch (err) {
        setError('Gagal memuat daftar film');
      }
    };

    fetchMovies();
=======
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError('Gagal memuat produk'));
>>>>>>> 49bf7a5 (Initial commit)
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