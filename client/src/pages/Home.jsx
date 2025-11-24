import React from 'react'
import Hero from '../components/Hero'
import DownloadAppInfo from '../components/DownloadAppInfo'
import Footer from '../components/Foooter'

const Home = () => {
  return (
    <div style={{backgroundColor:"#D9CFC7"}}>
      <Hero/>
      <DownloadAppInfo/>
      <Footer/>
    </div>
  )
}

export default Home
