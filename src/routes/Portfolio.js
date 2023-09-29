import React from "react"
import "../stylesheets/prep.css"
import NavBar from "../components/NavBar"
import PortFolioHeader from "../components/PortfolioHeader"
import PortfolioGrid from "../components/PortfolioGrid"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import { Helmet } from "react-helmet"

export const Portfolio = () =>{
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
    return(
        <div className="portfolio-Wrapper">
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
            <div className="keyword" style={{display:"none"}}>
                Leading exhibition stand builders in Middle East
                Europe's premier exhibition stand construction company
                Exceptional portfolio of exhibition stand projects
                Innovative exhibition stand designs in Middle East
                High-quality exhibition booth construction in Middle East
                Impressive exhibition stand solutions in Middle East
                Diverse range of successful exhibition stand builds
                Showcase of top-rated exhibition stand projects
                Trusted exhibition stand builders in the European market
                Expertise in delivering outstanding exhibition stand solutions
                Leading exhibition stand builders in Dubai
                Leading exhibition stand builders in Europe
                Leading exhibition stand builders in North and South America
                Leading exhibition stand builders in UAE
                UAE's premier exhibition stand construction company
                Middle East's premier exhibition stand construction company
                North and South America's premier exhibition stand construction company
                Innovative exhibition stand designs in Dubai
                Innovative exhibition stand designs in UAE
                Innovative exhibition stand designs in Europe
                Innovative exhibition stand designs in North and South America
                High-quality exhibition booth construction in Dubai
                High-quality exhibition booth construction in UAE
                High-quality exhibition booth construction in Europe
                High-quality exhibition booth construction in North and South America
                Impressive exhibition stand solutions in UAE
                Impressive exhibition stand solutions in Dubai
                Impressive exhibition stand solutions in Europe
                Impressive exhibition stand solutions in North and South America
                Trusted exhibition stand builders in the UAE market
                Trusted exhibition stand builders in the Middle East market
                Trusted exhibition stand builders in the Asia market
                Trusted exhibition stand builders in the North and South America market
            </div>
            <NavBar showMenu={showMenu} />
      <Menu hideMenu={hideMenu}/>
            <PortFolioHeader />
            <PortfolioGrid />
            <Footer />
        </div>
    )
}