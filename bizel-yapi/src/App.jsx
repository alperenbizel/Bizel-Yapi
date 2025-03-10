// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollTop from './components/ScrollTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
          <ScrollTop />
          <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
