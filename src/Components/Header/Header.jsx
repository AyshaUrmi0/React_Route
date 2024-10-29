import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
        <h2>Navbar</h2>
        <nav>
         
            <Link to="/">Home </Link>
            <Link Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
        </nav>
        
        
    </div>
  )
}
