import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HomeDetails from './pages/HomeDetails';
import Homes from './pages/Homes';
import MyBookings from './pages/MyBookings';
import About from './pages/About';
import Footer from './components/Foooter';

const App = () => {

  const [showLogin, setShowLogin]=useState(false);

  // for owner path, no need of the user navbar
  const isOwnerPath=useLocation().pathname.startsWith('/owner')


  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home-details/:id' element={<HomeDetails/>} />
        <Route path='/rooms' element={<Homes/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

      {!isOwnerPath && <Footer/>}
    </>

    
  )
}

export default App
