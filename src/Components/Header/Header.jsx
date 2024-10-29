import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <h2>Navbar</h2>
      <nav className="navbar">
        <NavLink to="/" className={(e) => (e.isActive ? 'red' : '')}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/contact" className={(e) => (e.isActive ? 'red' : '')}>
          <li>Contact</li>
        </NavLink>
        <NavLink to="/about" className={(e) => (e.isActive ? 'red' : '')}>
          <li>About</li>
        </NavLink>
      </nav>
    </div>
  );
}
