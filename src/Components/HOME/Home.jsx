import React from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
export default function Home() {
  const navigation=useNavigation();
  const location=useLocation();

  console.log(location);
  return (
    <div>
        <Header></Header>
        {
          navigation.state==='loading' ? <h1>Loading...</h1>: <Outlet />
        }
        <br />
       
      
       
        <Footer></Footer>
    </div>
    
  )
}
