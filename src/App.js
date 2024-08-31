import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ComplaintForm from './components/ComplaintForm';

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
              <Link to="/about">About/Contact</Link>
            </li>
            <li>
              <Link to="/complaint-form">Complaint Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/about-contact" component={About} />
          <Route path="/complaint-form" component={ComplaintForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;