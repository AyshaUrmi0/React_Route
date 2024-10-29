import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
export default function Home() {
  return (
    <div>
        <Header></Header>
        <br />
        <h1>This is my website</h1>
      
        <Outlet />
        <Footer></Footer>
    </div>
    
  )
}
