import React from 'react'
import AboutUsBody from '../components/AboutUsBody'
import AboutUsHeader from '../components/AboutUsHeader'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import { Helmet } from 'react-helmet'
const AboutUsPage = () => {
  const showMenu = () => {
    document.getElementById("menuContainer").style.zIndex = "998";
    document.getElementById("menuContainer").style.opacity = "1";
    let coll = document.getElementsByClassName("menuLink");
    for (let i = 0; i < coll.length; i++) {
        coll[i].style.animationDelay = `${i * 0.1}s`
        coll[i].classList.add("animate")
    }
  }

  const hideMenu = () => {
    document.getElementById("menuContainer").style.zIndex = "-8";
    document.getElementById("menuContainer").style.opacity = "0";
    let coll = document.getElementsByClassName("menuLink");
    for (let i = 0; i < coll.length; i++) {
        coll[i].classList.remove("animate")
    }
  }
  return (
    <div>
      <Helmet>
      <title>Suprano Exhibits</title>
        <meta name='description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services. '></meta>
      <meta name='og:title' content='Suprano Exhibits.'></meta>
        <meta name='og:description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services.'></meta>
        <link rel='canonical' href='http://localhost:3000/'></link>
        <meta name='og:type' content='website'></meta>
        <meta name='og:image' content='/test_files/test.png.ico'></meta>
        <meta name='og:url' content='https://supranoexhibits.com/'></meta>
      </Helmet>
      <div className='keywords' style={{display:"none"}}>
      Exhibition booth construction company
      Top exhibition stand builder in Europe
      Exhibition booth design and fabrication
      Custom trade show booth solutions
      Leading exhibition booth contractor
      Event management and execution services
      Innovative exhibition booth designs
      Premier exhibition booth builder in UAE
      Professional exhibition services
      Expertise in exhibition project management
      Top exhibition stand builder in Middle East
      Top exhibition stand builder in UAE
      Top exhibition stand builder in Europe
      Top exhibition stand builder in North and South America
      Premier exhibition booth builder in Dubai
      Premier exhibition booth builder in UAE
      Premier exhibition booth builder in Europe
      Premier exhibition booth builder in North and South America
      </div>
        <NavBar showMenu={showMenu} />
      <Menu hideMenu={hideMenu}/>
        <AboutUsHeader />
        <AboutUsBody />
        <Footer />
    </div>
  )
}

export default AboutUsPage