import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ComplaintForm from './ComplaintForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-contact">About/Contact</Link>
            </li>
            <li>
              <Link to="/complaint-form">Complaint Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;