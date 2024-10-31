import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div>
     
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
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'red' : '')}>
  <li>Users</li>
</NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? 'red' : '')}>
  <li>Posts</li>
</NavLink>
      </nav>
    </div>
  );
}
