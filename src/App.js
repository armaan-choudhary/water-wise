import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ComplaintForm from './components/ComplaintForm';
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import './App.css'
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/bat-cave" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;