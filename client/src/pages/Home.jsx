import React from 'react'
import Hero from '../components/Hero'
import DownloadAppInfo from '../components/DownloadAppInfo'
import Footer from '../components/Foooter'
import CuratedPGCollections from '../components/CuratedPGCollections'
import Services from '../components/Services'
import SellRentBanner from '../components/SellRentBanner'
import RoomSharingOptions from '../components/RoomSharingOptions'
import AboutSection from '../components/AboutSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div style={{backgroundColor:"#fff5e6"}}>
      <Hero/> 
      <CuratedPGCollections/> 
      <Services/>
      <RoomSharingOptions/>
      <AboutSection/>
      <SellRentBanner/>
      <Testimonials/>
      <DownloadAppInfo/>
      <Footer/>
    </div>
  )
}

export default Home
