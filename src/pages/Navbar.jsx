// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you will create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1> FleetSync</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link to="/products" className="nav-link">Products</Link>
          <div className="dropdown-menu">
            <Link to="/product1" className="dropdown-item">Product 1</Link>
            <Link to="/product2" className="dropdown-item">Product 2</Link>
            <Link to="/product3" className="dropdown-item">Product 3</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <div className="dropdown-menu">
            <Link to="/solution1" className="dropdown-item">Solution 1</Link>
            <Link to="/solution2" className="dropdown-item">Solution 2</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link to="/resources" className="nav-link">Resources</Link>
          <div className="dropdown-menu">
            <Link to="/docs" className="dropdown-item">Docs</Link>
            <Link to="/tutorials" className="dropdown-item">Tutorials</Link>
            <Link to="/blog" className="dropdown-item">Blog</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link to="/company" className="nav-link">Company</Link>
          <div className="dropdown-menu">
            <Link to="/about-us" className="dropdown-item">About Us</Link>
            <Link to="/careers" className="dropdown-item">Careers</Link>
            <Link to="/team" className="dropdown-item">Team</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link to="/customers" className="nav-link">Customers</Link>
          <div className="dropdown-menu">
            <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
            <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/get-started" className="nav-link cta-button">Get Started</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
