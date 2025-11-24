import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HomeDetails from './pages/HomeDetails';
import Homes from './pages/Homes';
import MyBookings from './pages/MyBookings';

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
        <Route path='/homes' element={<Homes/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
    </>

    
  )
}

export default App
