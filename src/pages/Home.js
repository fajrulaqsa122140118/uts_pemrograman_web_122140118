import React from 'react';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter'; // ⬅️ tambahkan ini

const Home = () => {
  return (
    <div>
      <h1>Welcome to UTS React!</h1>
      <p>Ini adalah halaman Home.</p>
      <Greeting name="Fulan" />
      <Counter /> {/* ⬅️ panggil komponen Counter */}
    </div>
  );
};

export default Home;
