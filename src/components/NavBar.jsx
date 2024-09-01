import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../assets/water-wise-logo.png';

const Navbar = () => {
  return (
    <nav className='mainContainer'>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Water-Wise Logo" />
          </Link>
        </li>
        <div className='sideLinkContainer'>
          <li className='buttonLink'>
            <Link to="/complaint-form">Raise a Complaint</Link>
          </li>
          <li className='buttonLink'>
            <Link to="/about">Helpdesk</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;