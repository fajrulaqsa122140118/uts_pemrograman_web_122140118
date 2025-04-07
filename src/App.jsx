import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <>
       <nav style={{
  marginBottom: '20px',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '5px'
}}>
  <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#333' }}>Home</Link>
  <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none', color: '#333' }}>About</Link>
  <Link to="/users" style={{ textDecoration: 'none', color: '#333' }}>Users</Link>
</nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
