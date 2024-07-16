import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Crud from './components/Crud';
import ApiData from './components/ApiData';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
